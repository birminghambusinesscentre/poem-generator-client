const DEFAULT_ROOT_FOLDER = "poem-generator-submissions";

type SubmissionTargetInput = {
  email: string;
  rootFolder?: string;
  themeId: string;
  timestamp: string;
};

type SubmissionTarget = {
  folder: string;
  publicId: string;
};

type CloudinaryConfig = {
  apiKey: string;
  apiSecret: string;
  cloudName: string;
};

type CloudinaryEnv = Record<string, string | undefined>;

function sanitizeSegment(value: string, fallback: string): string {
  const sanitized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return sanitized || fallback;
}

function parseCloudinaryUrl(value: string): CloudinaryConfig | null {
  try {
    const url = new URL(value);

    if (
      url.protocol !== "cloudinary:" ||
      !url.username ||
      !url.password ||
      !url.hostname
    ) {
      return null;
    }

    return {
      apiKey: decodeURIComponent(url.username),
      apiSecret: decodeURIComponent(url.password),
      cloudName: url.hostname,
    };
  } catch {
    return null;
  }
}

function sanitizeTimestamp(value: string): string {
  return (
    value
      .trim()
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "unknown-time"
  );
}

export function getCloudinaryConfigFromEnv(
  env: CloudinaryEnv,
): CloudinaryConfig | null {
  if (!env.CLOUDINARY_URL) {
    return null;
  }

  return parseCloudinaryUrl(env.CLOUDINARY_URL);
}

export function buildCloudinarySubmissionTarget(
  input: SubmissionTargetInput,
): SubmissionTarget {
  const rootFolder = sanitizeSegment(
    input.rootFolder || DEFAULT_ROOT_FOLDER,
    DEFAULT_ROOT_FOLDER,
  );
  const themeId = sanitizeSegment(input.themeId, "general");
  const email = sanitizeSegment(input.email, "guest");
  const timestamp = sanitizeTimestamp(input.timestamp);
  const dateFolder = /^\d{4}-\d{2}-\d{2}/.test(input.timestamp)
    ? input.timestamp.slice(0, 10)
    : "unknown-date";

  return {
    folder: `${rootFolder}/${themeId}/${dateFolder}`,
    publicId: `${email}-${timestamp}`,
  };
}

export function isSupportedImageDataUrl(dataUrl: string): boolean {
  return /^data:image\/(?:png|jpeg);base64,[a-zA-Z0-9+/=]+$/.test(dataUrl);
}

export function getDataUrlSizeInBytes(dataUrl: string): number {
  const base64 = dataUrl.split(",", 2)[1] || "";
  const padding = base64.endsWith("==") ? 2 : base64.endsWith("=") ? 1 : 0;

  return Math.floor((base64.length * 3) / 4) - padding;
}
