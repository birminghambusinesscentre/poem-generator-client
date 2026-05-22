import { NextResponse } from "next/server";

// Run on the Node.js runtime so the server-only API keys are available
// and never shipped to the browser.
export const runtime = "nodejs";

// Try once, then retry up to 3 more times (4 attempts total) per provider.
const MAX_ATTEMPTS = 4;

type Provider = {
  name: string;
  url: string;
  model: string;
  apiKey: string | undefined;
};

type ProviderResult =
  | { ok: true; poem: string }
  | { ok: false; error: string; status: number };

// Call a single OpenAI-compatible provider, retrying transient failures.
async function callProvider(
  provider: Provider,
  messages: unknown[],
): Promise<ProviderResult> {
  let lastError = `${provider.name}: request failed.`;
  let lastStatus = 502;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await fetch(provider.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${provider.apiKey}`,
        },
        body: JSON.stringify({ model: provider.model, messages }),
      });

      if (response.ok) {
        const data = await response.json();
        const poem: string = data?.choices?.[0]?.message?.content?.trim() ?? "";

        if (poem) {
          return { ok: true, poem };
        }

        // Empty completion — treat as a soft failure worth retrying.
        lastError = `${provider.name} returned an empty poem.`;
        lastStatus = 502;
      } else {
        lastError = `${provider.name} error (${response.status}): ${await response.text()}`;
        lastStatus = response.status;

        // Only retry rate limits (429) and server errors (5xx). Other 4xx
        // (e.g. 400 bad request, 401 invalid key) won't succeed on a retry —
        // bail out so we can fall back to the next provider sooner.
        const retryable = response.status === 429 || response.status >= 500;

        if (!retryable) {
          return { ok: false, error: lastError, status: lastStatus };
        }
      }
    } catch (error) {
      lastError = `${provider.name} unreachable: ${String(error)}`;
      lastStatus = 502;
    }

    // Back off before the next attempt: 0.5s, then 1s, then 2s.
    if (attempt < MAX_ATTEMPTS) {
      await new Promise((resolve) =>
        setTimeout(resolve, 500 * 2 ** (attempt - 1)),
      );
    }
  }

  return { ok: false, error: lastError, status: lastStatus };
}

export async function POST(request: Request) {
  let messages: unknown;

  try {
    ({ messages } = await request.json());
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON in request body." },
      { status: 400 },
    );
  }

  if (!Array.isArray(messages)) {
    return NextResponse.json(
      { error: "Request body must include a 'messages' array." },
      { status: 400 },
    );
  }

  // Ordered list of providers: try Pollinations first, fall back to Groq.
  // Providers without a configured key are skipped.
  const providers: Provider[] = [
    {
      name: "Pollinations",
      url: "https://gen.pollinations.ai/v1/chat/completions",
      model: "llama-scout",
      apiKey: process.env.POLLINATIONS_API_KEY,
    },
    {
      name: "Groq",
      url: "https://api.groq.com/openai/v1/chat/completions",
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      apiKey: process.env.GROQ_API_KEY,
    },
  ].filter((provider) => provider.apiKey);

  if (providers.length === 0) {
    return NextResponse.json(
      {
        error:
          "No provider API keys configured. Set POLLINATIONS_API_KEY and/or GROQ_API_KEY.",
      },
      { status: 500 },
    );
  }

  let lastResult: ProviderResult = {
    ok: false,
    error: "No providers attempted.",
    status: 502,
  };

  for (const provider of providers) {
    const result = await callProvider(provider, messages);

    if (result.ok) {
      return NextResponse.json({ poem: result.poem });
    }

    lastResult = result;
  }

  return NextResponse.json(
    { error: lastResult.error },
    { status: lastResult.status },
  );
}
