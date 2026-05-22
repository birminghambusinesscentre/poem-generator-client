import { NextResponse } from "next/server";

// Run on the Node.js runtime so the server-only GROQ_API_KEY is available
// and never shipped to the browser.
export const runtime = "nodejs";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "meta-llama/llama-4-scout-17b-16e-instruct";

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Server is missing the GROQ_API_KEY environment variable." },
      { status: 500 },
    );
  }

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

  try {
    const groqResponse = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model: MODEL, messages }),
    });

    if (!groqResponse.ok) {
      const detail = await groqResponse.text();

      return NextResponse.json(
        { error: `Groq API error (${groqResponse.status}): ${detail}` },
        { status: groqResponse.status },
      );
    }

    const data = await groqResponse.json();
    const poem: string = data?.choices?.[0]?.message?.content?.trim() ?? "";

    return NextResponse.json({ poem });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to reach Groq: " + String(error) },
      { status: 502 },
    );
  }
}
