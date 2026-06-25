import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

import {
  buildCloudinarySubmissionTarget,
  getDataUrlSizeInBytes,
  isSupportedImageDataUrl,
} from "@/lib/cloudinary-submissions";

export const runtime = "nodejs";

const MAX_IMAGE_BYTES = 12 * 1024 * 1024;

type UploadRequestBody = {
  email?: unknown;
  imageDataUrl?: unknown;
  themeId?: unknown;
  timestamp?: unknown;
};

function getCloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return null;
  }

  return { apiKey, apiSecret, cloudName };
}

export async function POST(request: Request) {
  let body: UploadRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON in request body." },
      { status: 400 },
    );
  }

  if (
    typeof body.imageDataUrl !== "string" ||
    !isSupportedImageDataUrl(body.imageDataUrl)
  ) {
    return NextResponse.json(
      { error: "A PNG or JPEG image data URL is required." },
      { status: 400 },
    );
  }

  if (getDataUrlSizeInBytes(body.imageDataUrl) > MAX_IMAGE_BYTES) {
    return NextResponse.json(
      { error: "Image is too large to upload." },
      { status: 413 },
    );
  }

  const config = getCloudinaryConfig();

  if (!config) {
    return NextResponse.json(
      { error: "Cloudinary is not configured." },
      { status: 500 },
    );
  }

  cloudinary.config({
    api_key: config.apiKey,
    api_secret: config.apiSecret,
    cloud_name: config.cloudName,
    secure: true,
  });

  const timestamp =
    typeof body.timestamp === "string"
      ? body.timestamp
      : new Date().toISOString();
  const { folder, publicId } = buildCloudinarySubmissionTarget({
    email: typeof body.email === "string" ? body.email : "",
    rootFolder: process.env.CLOUDINARY_UPLOAD_FOLDER,
    themeId: typeof body.themeId === "string" ? body.themeId : "",
    timestamp,
  });

  try {
    const upload = await cloudinary.uploader.upload(body.imageDataUrl, {
      folder,
      overwrite: false,
      public_id: publicId,
      resource_type: "image",
    });

    return NextResponse.json({ assetId: upload.asset_id, ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: `Cloudinary upload failed: ${String(error)}` },
      { status: 502 },
    );
  }
}
