import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import ts from "typescript";

const projectRoot = process.cwd();
const source = readFileSync(join(projectRoot, "lib", "cloudinary-submissions.ts"), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
  },
});

const module = { exports: {} };

new Function("module", "exports", outputText)(module, module.exports);

const {
  buildCloudinarySubmissionTarget,
  getDataUrlSizeInBytes,
  isSupportedImageDataUrl,
} = module.exports;

test("buildCloudinarySubmissionTarget groups uploads by root, theme, and date", () => {
  assert.deepEqual(
    buildCloudinarySubmissionTarget({
      email: "Christina+VIP@example.com",
      rootFolder: "poem-generator-submissions",
      themeId: "Doors Open Bell!",
      timestamp: "2026-06-25T19:42:10.123Z",
    }),
    {
      folder: "poem-generator-submissions/doors-open-bell/2026-06-25",
      publicId: "christina-vip-example-com-2026-06-25T19-42-10-123Z",
    },
  );
});

test("buildCloudinarySubmissionTarget uses guest and default folder for missing values", () => {
  assert.deepEqual(
    buildCloudinarySubmissionTarget({
      email: "",
      rootFolder: "",
      themeId: "",
      timestamp: "bad-date",
    }),
    {
      folder: "poem-generator-submissions/general/unknown-date",
      publicId: "guest-bad-date",
    },
  );
});

test("image data URL helpers accept png and jpeg only and compute decoded size", () => {
  assert.equal(isSupportedImageDataUrl("data:image/png;base64,AAAA"), true);
  assert.equal(isSupportedImageDataUrl("data:image/jpeg;base64,AAAA"), true);
  assert.equal(isSupportedImageDataUrl("data:image/gif;base64,AAAA"), false);
  assert.equal(getDataUrlSizeInBytes("data:image/png;base64,AAAA"), 3);
});
