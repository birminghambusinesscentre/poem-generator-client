import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const projectRoot = process.cwd();
const themesSource = readFileSync(join(projectRoot, "config", "themes.ts"), "utf8");
const oldAmanFlyerPath = join(projectRoot, "public", "decorations", "aman_graduation_party.png");
const oldAmanBackgroundPath = join(projectRoot, "public", "background_images", "aman_graduation_bg.png");
const cartoonAmanBackgroundPath = join(projectRoot, "public", "background_images", "aman_graduation_summer_garden_bg.png");
const oldAmanEmblemPath = join(projectRoot, "public", "decorations", "aman_graduation_emblem.png");
const oldAmanBalloonsPath = join(projectRoot, "public", "decorations", "aman_graduation_balloons.png");
const oldAmanConfettiPath = join(projectRoot, "public", "decorations", "aman_graduation_confetti.png");
const amanAssetPaths = [
  join(projectRoot, "public", "background_images", "aman_graduation_indian_garden_bg.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_indian_emblem.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_doctor.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_cap_diploma.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_marigold_lanterns.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_stethoscope.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_jasmine_garland.png"),
];

test("Aman's June 21 graduation party uses a custom multi-asset theme", () => {
  assert.match(themesSource, /id:\s*"aman-graduation-party"/);
  assert.match(themesSource, /name:\s*"Aman's Graduation Party"/);
  assert.match(themesSource, /imagePath:\s*"\/background_images\/aman_graduation_indian_garden_bg\.png"/);
  assert.match(themesSource, /adult and refined Indian-inspired garden/i);
  assert.match(themesSource, /realistic flowers and mature trees/i);
  assert.match(themesSource, /marigolds, jasmine, and warm gold accents/i);
  assert.match(themesSource, /first day of summer/i);
  assert.match(themesSource, /longest day of the year/i);
  assert.match(themesSource, /summer sun/i);
  assert.match(themesSource, /bright future ahead/i);
  assert.match(themesSource, /iso:\s*"2026-06-21"/);
  assert.match(themesSource, /display:\s*"SUNDAY, JUNE 21"/);
  assert.match(themesSource, /time:\s*"6:30PM - 10:30PM"/);
  assert.match(themesSource, /day:\s*21/);
  assert.match(themesSource, /\/decorations\/aman_graduation_indian_emblem\.png/);
  assert.match(themesSource, /\/decorations\/aman_graduation_doctor\.png/);
  assert.match(themesSource, /\/decorations\/aman_graduation_cap_diploma\.png/);
  assert.match(themesSource, /\/decorations\/aman_graduation_marigold_lanterns\.png/);
  assert.match(themesSource, /\/decorations\/aman_graduation_stethoscope\.png/);
  assert.match(themesSource, /\/decorations\/aman_graduation_jasmine_garland\.png/);
  assert.doesNotMatch(themesSource, /aman_graduation_party\.png/);
  assert.doesNotMatch(themesSource, /aman_graduation_bg\.png/);
  assert.doesNotMatch(themesSource, /aman_graduation_summer_garden_bg\.png/);
  assert.doesNotMatch(themesSource, /aman_graduation_emblem\.png/);
  assert.doesNotMatch(themesSource, /aman_graduation_balloons\.png/);
  assert.doesNotMatch(themesSource, /aman_graduation_confetti\.png/);
  assert.equal(existsSync(oldAmanFlyerPath), false, "The supplied flyer should not remain as a theme asset");
  assert.equal(existsSync(oldAmanBackgroundPath), false, "The dark Aman background should be replaced by the bright summer garden asset");
  assert.equal(existsSync(cartoonAmanBackgroundPath), false, "The cartoon Aman background should be replaced by an adult Indian-inspired garden asset");
  assert.equal(existsSync(oldAmanEmblemPath), false, "The cartoon Aman emblem should be replaced by an adult Indian-inspired crest");
  assert.equal(existsSync(oldAmanBalloonsPath), false, "The cartoon balloon decoration should be replaced by an adult Indian-inspired accent");
  assert.equal(existsSync(oldAmanConfettiPath), false, "The cartoon confetti decoration should be replaced by an adult Indian-inspired garland");

  for (const assetPath of amanAssetPaths) {
    assert.ok(existsSync(assetPath), `${assetPath} should exist`);
  }
});
