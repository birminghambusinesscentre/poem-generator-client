import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const projectRoot = process.cwd();
const themesSource = readFileSync(join(projectRoot, "config", "themes.ts"), "utf8");
const oldAmanFlyerPath = join(projectRoot, "public", "decorations", "aman_graduation_party.png");
const amanAssetPaths = [
  join(projectRoot, "public", "background_images", "aman_graduation_bg.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_emblem.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_doctor.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_cap_diploma.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_balloons.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_stethoscope.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_confetti.png"),
];

test("Aman's June 21 graduation party uses a custom multi-asset theme", () => {
  assert.match(themesSource, /id:\s*"aman-graduation-party"/);
  assert.match(themesSource, /name:\s*"Aman's Graduation Party"/);
  assert.match(themesSource, /imagePath:\s*"\/background_images\/aman_graduation_bg\.png"/);
  assert.match(themesSource, /iso:\s*"2026-06-21"/);
  assert.match(themesSource, /display:\s*"SUNDAY, JUNE 21"/);
  assert.match(themesSource, /time:\s*"6:30PM - 10:30PM"/);
  assert.match(themesSource, /day:\s*21/);
  assert.match(themesSource, /\/decorations\/aman_graduation_emblem\.png/);
  assert.match(themesSource, /\/decorations\/aman_graduation_doctor\.png/);
  assert.match(themesSource, /\/decorations\/aman_graduation_cap_diploma\.png/);
  assert.match(themesSource, /\/decorations\/aman_graduation_balloons\.png/);
  assert.match(themesSource, /\/decorations\/aman_graduation_stethoscope\.png/);
  assert.match(themesSource, /\/decorations\/aman_graduation_confetti\.png/);
  assert.doesNotMatch(themesSource, /aman_graduation_party\.png/);
  assert.equal(existsSync(oldAmanFlyerPath), false, "The supplied flyer should not remain as a theme asset");

  for (const assetPath of amanAssetPaths) {
    assert.ok(existsSync(assetPath), `${assetPath} should exist`);
  }
});
