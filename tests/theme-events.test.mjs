import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const projectRoot = process.cwd();
const themesSource = readFileSync(join(projectRoot, "config", "themes.ts"), "utf8");
const appSource = readFileSync(join(projectRoot, "app", "page.tsx"), "utf8");
const themeProviderSource = readFileSync(
  join(projectRoot, "components", "ThemeProvider.tsx"),
  "utf8",
);
const amanThemeStart = themesSource.indexOf('id: "aman-graduation-party"');
const amanThemeEnd = themesSource.indexOf('id: "girl-birthday"', amanThemeStart);
const amanThemeSource = themesSource.slice(amanThemeStart, amanThemeEnd);
const oldAmanFlyerPath = join(projectRoot, "public", "decorations", "aman_graduation_party.png");
const oldAmanBackgroundPath = join(projectRoot, "public", "background_images", "aman_graduation_bg.png");
const cartoonAmanBackgroundPath = join(projectRoot, "public", "background_images", "aman_graduation_summer_garden_bg.png");
const exoticAmanBackgroundPath = join(projectRoot, "public", "background_images", "aman_graduation_indian_garden_bg.png");
const oldAmanEmblemPath = join(projectRoot, "public", "decorations", "aman_graduation_emblem.png");
const oldAmanBalloonsPath = join(projectRoot, "public", "decorations", "aman_graduation_balloons.png");
const oldAmanConfettiPath = join(projectRoot, "public", "decorations", "aman_graduation_confetti.png");
const exoticAmanEmblemPath = join(projectRoot, "public", "decorations", "aman_graduation_indian_emblem.png");
const exoticAmanMarigoldPath = join(projectRoot, "public", "decorations", "aman_graduation_marigold_lanterns.png");
const exoticAmanJasminePath = join(projectRoot, "public", "decorations", "aman_graduation_jasmine_garland.png");
const cartoonAmanDoctorPath = join(projectRoot, "public", "decorations", "aman_graduation_doctor.png");
const cartoonAmanCapPath = join(projectRoot, "public", "decorations", "aman_graduation_cap_diploma.png");
const cartoonAmanStethoscopePath = join(projectRoot, "public", "decorations", "aman_graduation_stethoscope.png");
const bellCourtyardSummerBackgroundPath = join(projectRoot, "public", "background_images", "aman_graduation_bell_courtyard_summer_bg.png");
const amanSummerSunPath = join(projectRoot, "public", "decorations", "aman_graduation_summer_sun.png");
const amanAssetPaths = [
  join(projectRoot, "public", "background_images", "aman_graduation_black_gold_garden_bg.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_black_gold_balloons.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_dr_aman_pal_cartoon.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_hibiscus_emblem.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_adult_cap_stethoscope.png"),
  join(projectRoot, "public", "decorations", "aman_graduation_hibiscus_branch.png"),
];

test("Aman's June 21 graduation party uses a custom multi-asset theme", () => {
  assert.match(themesSource, /id:\s*"aman-graduation-party"/);
  assert.match(amanThemeSource, /name:\s*"Dr Aman Pal's Graduation Party"/);
  assert.match(amanThemeSource, /Dr Aman Pal/);
  assert.match(amanThemeSource, /poemHeading:\s*"A Special poem for you!"/);
  assert.match(amanThemeSource, /poemEventTitle:\s*"Dr Aman Pal Graduation Party"/);
  assert.match(amanThemeSource, /imagePath:\s*"\/background_images\/aman_graduation_black_gold_garden_bg\.png"/);
  assert.match(amanThemeSource, /adult Bell Garden Courtyard celebration/i);
  assert.match(amanThemeSource, /black-and-gold balloon/i);
  assert.match(amanThemeSource, /gold and black balloon/i);
  assert.match(amanThemeSource, /realistic hibiscus flowers and big shady trees/i);
  assert.match(amanThemeSource, /no tables, dining chairs, or reception furniture/i);
  assert.match(amanThemeSource, /garden-only/i);
  assert.doesNotMatch(amanThemeSource, /two-peak|event tent|white tent/i);
  assert.match(amanThemeSource, /first day of summer/i);
  assert.match(amanThemeSource, /longest day of the year/i);
  assert.match(amanThemeSource, /shining summer sun/i);
  assert.match(amanThemeSource, /bright future ahead/i);
  assert.match(amanThemeSource, /grateful hearts/i);
  assert.match(amanThemeSource, /answering our call/i);
  assert.match(amanThemeSource, /presence made this day complete/i);
  assert.match(amanThemeSource, /cherished and sweet/i);
  assert.doesNotMatch(amanThemeSource, /featuredPoem:\s*"/);
  assert.match(amanThemeSource, /poemFooter:\s*"/);
  assert.match(amanThemeSource, /With grateful hearts, we thank you all,/);
  assert.match(amanThemeSource, /For joining us and answering our call\./);
  assert.match(amanThemeSource, /Your presence made this day complete,/);
  assert.match(amanThemeSource, /A memory forever cherished and sweet\./);
  assert.match(amanThemeSource, /leftOfficeLine:\s*null/);
  assert.match(amanThemeSource, /rightWebsite:\s*"BellGardenCourtyard\.ca"/);
  assert.match(amanThemeSource, /rightContactLine:\s*null/);
  assert.match(amanThemeSource, /programCredit:\s*null/);
  assert.doesNotMatch(amanThemeSource, /(?:Office|Cell):\s*\+?1|\(416\)|252-7731|605-1091/);
  assert.match(amanThemeSource, /iso:\s*"2026-06-21"/);
  assert.match(amanThemeSource, /display:\s*"SUNDAY, JUNE 21"/);
  assert.match(amanThemeSource, /time:\s*"6:30PM - 10:30PM"/);
  assert.match(amanThemeSource, /day:\s*21/);
  assert.match(amanThemeSource, /\/decorations\/aman_graduation_hibiscus_emblem\.png/);
  assert.match(amanThemeSource, /\/decorations\/aman_graduation_adult_cap_stethoscope\.png/);
  assert.match(amanThemeSource, /\/decorations\/aman_graduation_black_gold_balloons\.png/);
  assert.match(amanThemeSource, /\/decorations\/aman_graduation_dr_aman_pal_cartoon\.png/);
  assert.match(amanThemeSource, /\/decorations\/aman_graduation_hibiscus_branch\.png/);
  assert.doesNotMatch(amanThemeSource, /\/decorations\/aman_graduation_summer_sun\.png/);
  assert.doesNotMatch(amanThemeSource, /Dr\. Aman(?! Pal)|Dr Aman(?! Pal)/);
  assert.doesNotMatch(amanThemeSource, /aman_graduation_party\.png/);
  assert.doesNotMatch(amanThemeSource, /aman_graduation_bg\.png/);
  assert.doesNotMatch(amanThemeSource, /aman_graduation_summer_garden_bg\.png/);
  assert.doesNotMatch(amanThemeSource, /aman_graduation_indian_garden_bg\.png/);
  assert.doesNotMatch(amanThemeSource, /aman_graduation_emblem\.png/);
  assert.doesNotMatch(amanThemeSource, /aman_graduation_balloons\.png/);
  assert.doesNotMatch(amanThemeSource, /aman_graduation_confetti\.png/);
  assert.doesNotMatch(amanThemeSource, /aman_graduation_indian_emblem\.png/);
  assert.doesNotMatch(amanThemeSource, /aman_graduation_marigold_lanterns\.png/);
  assert.doesNotMatch(amanThemeSource, /aman_graduation_jasmine_garland\.png/);
  assert.doesNotMatch(amanThemeSource, /drapery|drapes|palms|palm trees|Indian-inspired|marigolds|jasmine/i);
  assert.match(appSource, /leftOfficeLine\s*=\s*currentTheme\.leftOfficeLine/);
  assert.match(appSource, /rightWebsite\s*=\s*currentTheme\.rightWebsite/);
  assert.match(appSource, /rightContactLine\s*=\s*currentTheme\.rightContactLine/);
  assert.match(appSource, /poemHeading\s*=\s*currentTheme\.poemHeading/);
  assert.match(appSource, /poemEventTitle\s*=\s*currentTheme\.poemEventTitle/);
  assert.match(appSource, /poemFooter\s*=\s*currentTheme\.poemFooter/);
  assert.match(appSource, /showPoemPanel\s*=\s*Boolean\(displayedPoem\s*\|\|\s*poemFooter\)/);
  assert.match(appSource, /displayedPoem\s*=\s*poem\s*\|\|\s*currentTheme\.featuredPoem/);
  assert.match(appSource, /programCredit\s*=\s*currentTheme\.programCredit/);
  assert.match(appSource, /programCredit\s*&&/);
  assert.equal(existsSync(oldAmanFlyerPath), false, "The supplied flyer should not remain as a theme asset");
  assert.equal(existsSync(oldAmanBackgroundPath), false, "The dark Aman background should be replaced by the bright summer garden asset");
  assert.equal(existsSync(cartoonAmanBackgroundPath), false, "The cartoon Aman background should be replaced by an adult Indian-inspired garden asset");
  assert.equal(existsSync(exoticAmanBackgroundPath), false, "The exotic Aman background should be replaced by a Bell Garden Courtyard-style asset");
  assert.equal(existsSync(oldAmanEmblemPath), false, "The cartoon Aman emblem should be replaced by an adult Indian-inspired crest");
  assert.equal(existsSync(oldAmanBalloonsPath), false, "The cartoon balloon decoration should be replaced by an adult Indian-inspired accent");
  assert.equal(existsSync(oldAmanConfettiPath), false, "The cartoon confetti decoration should be replaced by an adult Indian-inspired garland");
  assert.equal(existsSync(exoticAmanEmblemPath), false, "The exotic Aman emblem should be replaced by a courtyard graduation crest");
  assert.equal(existsSync(exoticAmanMarigoldPath), false, "The exotic Aman side decoration should be replaced by courtyard hibiscus");
  assert.equal(existsSync(exoticAmanJasminePath), false, "The exotic Aman garland should be replaced by a summer sun accent");
  assert.equal(existsSync(cartoonAmanDoctorPath), false, "The cartoon doctor decoration should be replaced by an adult graduation accent");
  assert.equal(existsSync(cartoonAmanCapPath), false, "The cartoon cap decoration should be replaced by an adult graduation accent");
  assert.equal(existsSync(cartoonAmanStethoscopePath), false, "The cartoon stethoscope decoration should be replaced by an adult graduation accent");
  assert.equal(existsSync(bellCourtyardSummerBackgroundPath), false, "The previous Aman background should be replaced by the black-and-gold garden version");
  assert.equal(existsSync(amanSummerSunPath), false, "The standalone sun decoration should be replaced by black-and-gold balloon styling");

  for (const assetPath of amanAssetPaths) {
    assert.ok(existsSync(assetPath), `${assetPath} should exist`);
  }
});

test("captured Aman layout avoids compact-screen header and decoration overlap", () => {
  assert.doesNotMatch(
    appSource,
    /fixed\s+top-4\s+left-4/,
    "The top header should stay in document flow instead of overlaying captured photos and poem titles.",
  );
  assert.doesNotMatch(
    appSource,
    /left:\s*'calc\(50%\s*[+-]/,
    "Top decorations should use a responsive row instead of absolute pixel offsets.",
  );
  assert.match(appSource, /data-testid="app-header"/);
  assert.match(appSource, /data-testid="top-decorations"/);
  assert.match(appSource, /grid\s+grid-cols-1\s+lg:grid-cols-2/);
  assert.match(appSource, /h-\[min\(400px,44vh\)\]/);
  assert.match(appSource, /max-w-\[1180px\]/);
  assert.match(themeProviderSource, /overflow-x-hidden/);
});
