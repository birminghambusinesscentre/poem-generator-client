export interface EventDate {
  iso: string;       // "2026-05-31" — used for TODAY comparison
  display: string;   // "SUNDAY, MAY 31" — banner top line
  time: string;      // "2PM - 6PM" — banner second line
  day: number;       // 31 — day-of-month badge
}

export interface Theme {
  id: string;
  name: string;
  imagePath: string;
  textColor: string;
  system: string;
  description: string;
  // recommended cartoon transparent images -  SQUARE
  imageDecoration1: string | null;
  imageDecorationsOnTop: { [key: string]: string | null } | null;
  rightRight?: string | null;
  leftLeft?: string | null;
  poemBackgroundColor: React.CSSProperties;
  eventDate?: EventDate;
}

export const themes: Theme[] = [
  {
    id: "birmingham-garden-party",
    name: "Birmingham Garden Party",
    imagePath: "/background_images/garden_party_bg.png",
    textColor: "text-white garden-party-outline",
    system:
      "Your task is to write a warm, sunlit poem based on the provided image, taken during a charming " +
      "outdoor garden party. Picture white peaked tents fluttering with colorful bunting flags, lush " +
      "summer gardens in full bloom, wooden lounge chairs on soft grass, pitchers of lemonade on side " +
      "tables, and friends gathered under golden-hour light. Weave in gentle details where they fit: " +
      "peonies and daisies, the soft rustle of leaves, laughter drifting across the lawn, the clink of " +
      "glasses, paper pennants gently swaying, and the quiet magic of a long summer evening outdoors. " +
      "Focus on community, friendship, blooming gardens, summer warmth, and the simple joy of gathering " +
      "outside. Even if the image doesn't directly show a garden party, interpret it through the lens of " +
      "a warm outdoor celebration. Make the poem about the person(s) in the image and their part in this " +
      "lovely afternoon gathering.",
    description: "Warm, sunlit poems celebrating an outdoor garden party — white tents, bunting, blooming gardens, golden-hour light, and good company on the lawn.",
    imageDecoration1: "/decorations/garden_party_emblem.png",
    imageDecorationsOnTop: {
      center: "/decorations/garden_party_tent.png",
      right: "/decorations/garden_party_lounge.png",
      left: "/decorations/garden_party_flowers.png",
    },
    rightRight: "/decorations/garden_party_vines.png",
    leftLeft: "/decorations/garden_party_bunting.png",
    poemBackgroundColor: {
      backgroundColor: "rgba(34, 70, 42, 0.88)",
      border: "3px solid #E8D8A8",
      boxShadow: "0 0 0 2px rgba(34,70,42,0.88), 0 12px 30px rgba(34,70,42,0.35)",
    },
  },
  {
    id: "revolution-kids-birthday",
    name: "Revolution Kids Birthday Party",
    imagePath: "/background_images/revolution_kids_bg.png",
    textColor: "text-white revolution-kids-outline",
    system:
      "Your task is to write a fun, magical, and joyful poem based on the provided image, taken during the Revolution Kids Birthday Party — a magical kids' birthday celebration filled with wonder, laughter, and showmanship. " +
      "The event features a young magician performing tricks: pulling fluffy white rabbits from sparkling top hats, fanning playing cards, waving a smoking magic wand, and releasing doves into the air. There are clusters of colorful balloons, a tall pink birthday cake with flickering candles, stacks of brightly wrapped gift boxes with ribbons, party hats, confetti, and bunting flags strung overhead. " +
      "Weave in playful nods to magic and party joy where they fit naturally: top hats and bunny rabbits, twinkling stars and golden sparkles, the word 'abracadabra,' colorful balloons drifting up, candles glowing on cake, and the delighted gasps of children watching tricks unfold. " +
      "Focus on wonder, surprise, childlike joy, friendship, the warm magic of celebrating a birthday together, and the sparkle of memories that feel like a spell that lasts. " +
      "Even if the image doesn't directly show a magician or party, interpret it through the lens of magic, celebration, and enchanted birthday joy. " +
      "Make the poem about the person(s) in the image and their place in this enchanted gathering.",
    description: "Magical and joyful poems for the Revolution Kids Birthday Party — top hats, bunny rabbits, sparkling wands, balloons, cake, and childlike wonder.",
    imageDecoration1: "/decorations/rev_kids_emblem.png",
    imageDecorationsOnTop: {
      center: "/decorations/magician_boy.png",
      right: "/decorations/rev_kids_cake.png",
      left: "/decorations/magic_hat_rabbit.png",
    },
    rightRight: "/decorations/rev_kids_gifts.png",
    leftLeft: "/decorations/rev_kids_balloons.png",
    poemBackgroundColor: {
      backgroundColor: "rgba(48, 22, 84, 0.92)",
      border: "3px solid #F2C744",
      boxShadow: "0 0 0 2px rgba(48,22,84,0.92), 0 12px 30px rgba(48,22,84,0.45)",
    },
    eventDate: {
      iso: "2026-06-07",
      display: "SUNDAY, JUN 7",
      time: "11:30AM - 3:30PM",
      day: 7,
    },
  },
  {
    id: "summer-backyard-party",
    name: "Summer Backyard Party",
    imagePath: "/background_images/summer_party_bg.png",
    textColor: "text-white summer-party-outline",
    system:
      "Your task is to write a joyful and festive poem based on the provided image, taken during " +
      "a vibrant summer backyard party — a colourful, fun-filled gathering of friends and family. " +
      "The party features a bouncy castle bouncing with laughter, a sizzling BBQ grill cooking up " +
      "burgers and hot dogs, clusters of bright balloons floating in the breeze, confetti drifting " +
      "through the air, and a picnic table loaded with summer treats on a red-and-white checkered " +
      "cloth. Weave in gentle nods to party joy where they fit naturally: the laughter of children, " +
      "the smoky scent of the grill, balloons swaying overhead, the warmth of a sunny day, and the " +
      "simple magic of friends and family gathered together. Focus on community, friendship, joyful " +
      "celebration, summer warmth, and the bright spirit of a perfect party day. Even if the image " +
      "doesn't directly show a party, interpret it through the lens of festive summer celebration. " +
      "Make the poem about the person(s) in the image and their joy at this happy gathering.",
    description: "Joyful, festive poems celebrating summer backyard parties — bouncy castles, sizzling BBQs, colourful balloons, and the warm spirit of friends and family gathered together.",
    imageDecoration1: "/decorations/party_celebrate_logo.png",
    imageDecorationsOnTop: {
      center: "/decorations/party_bouncy_castle.png",
      right: "/decorations/party_bbq_grill.png",
      left: "/decorations/party_balloons.png",
    },
    poemBackgroundColor: {
      backgroundColor: "rgba(220, 75, 90, 0.88)",
      border: "3px solid #FFC93C",
      boxShadow: "0 0 0 2px rgba(220, 75, 90, 0.88), 0 12px 30px rgba(220, 75, 90, 0.35)",
    },
    eventDate: {
      iso: "2026-06-06",
      display: "SATURDAY, JUNE 6",
      time: "10AM - 6PM",
      day: 6,
    },
  },
  {
    id: "senior-paws-fundraiser",
    name: "Senior Paws Canada Charity Fundraiser",
    imagePath: "/background_images/senior_paws_vintage_bg.svg",
    textColor: "text-black dark:text-white",
    system:
      "Your task is to write a heartwarming and tender poem based on the provided image which will be taken at the Senior Paws Canada charity fundraiser — a community event raising support for senior pets in their golden years. " +
      "The event features delicious Japanese fried chicken (karaage) and food, along with an Irish mobile pub wagon serving guests, so feel free to weave in gentle hints of cherry blossoms (sakura), Japanese flavors, lucky shamrocks, or the cozy charm of an Irish pub if it fits the image naturally. " +
      "Focus on themes of kindness, compassion, generosity, the quiet wisdom of older animals, the bond between humans and pets, and the joy of giving back. " +
      "Even if the image doesn't directly show pets or the fundraiser, interpret it through the lens of warmth, care, and the loving spirit of supporting senior animals. " +
      "Make the poem about the person(s) in the image and their part in this gentle, generous gathering. " +
      "Include feelings of warmth, gratitude, soft golden memories, and the simple beauty of helping creatures who have given so much love.",
    description: "Tender poems celebrating compassion, golden memories, cherry blossoms, lucky shamrocks, and the loving spirit of the Senior Paws Canada fundraiser.",
    imageDecoration1: "/decorations/new_paws_logo.png",
    imageDecorationsOnTop: {
      center: "/decorations/senior_pets_group.png",
      right: "/decorations/senior_dog_japanese.png",
      left: "/decorations/senior_cat_irish.png"
    },
    rightRight: "/decorations/cherry_blossom_branch.png",
    leftLeft: "/decorations/shamrock_chain.png",
    poemBackgroundColor: {
      backgroundColor: "rgba(31, 58, 31, 0.92)",
      border: "3px solid #C19A3F",
      boxShadow: "0 0 0 2px rgba(31,58,31,0.92), 0 12px 30px rgba(31,58,31,0.35)",
    },
  },
  {
    id: "sofis-party",
    name: "Sofi's Party — A Fairy Tale Bridal Shower",
    imagePath: "/background_images/sofis_party_bg.png",
    textColor: "text-white sofis-party-outline",
    system:
      "Your task is to write a romantic, fairy-tale poem based on the provided image, taken at Sofi's " +
      "Party — a princess-themed bridal shower celebrating the bride-to-be on Sunday, May 31, from 2 to " +
      "6 PM. The day is styled like a storybook tea party: a pink castle in the distance, lush gardens " +
      "of roses, tiered stands of macarons and rose-topped cupcakes, vintage porcelain teacups trimmed " +
      "in gold, and the gentle motto \"A Fairy Tale Begins\". Weave in gentle nods to this enchanted " +
      "world where it fits naturally: pink and cream roses, golden crowns, delicate teacups, sweet " +
      "pastries, soft pastel skies, and the romance of new beginnings. Focus on love, joy, sisterhood, " +
      "friendship, the bride's happiness, and the magic of celebrating someone before her wedding day. " +
      "Even if the image doesn't directly show the party or the bride, interpret it through the lens " +
      "of this fairy-tale celebration, with warmth, sweetness, and a touch of princess magic. Make the " +
      "poem about the person(s) in the image and their part in this enchanted afternoon honouring Sofi.",
    description: "Romantic, fairy-tale poems for Sofi's Party — a princess-themed bridal shower with pink castles, roses, golden teacups, and the magic of \"A Fairy Tale Begins\".",
    imageDecoration1: "/decorations/sofis_party_emblem.png",
    imageDecorationsOnTop: {
      center: "/decorations/sofis_bride_teacup.png",
      right: "/decorations/sofis_dessert_stand.png",
      left: "/decorations/sofis_castle.png",
    },
    rightRight: "/decorations/sofis_teapot.png",
    leftLeft: "/decorations/sofis_rose_bouquet.png",
    poemBackgroundColor: {
      backgroundColor: "rgba(120, 50, 80, 0.78)",
      border: "3px solid #D4AF37",
      boxShadow: "0 0 0 2px rgba(120,50,80,0.78), 0 12px 30px rgba(120,50,80,0.35)",
    },
    eventDate: {
      iso: "2026-05-31",
      display: "SUNDAY, MAY 31",
      time: "2PM - 6PM",
      day: 31,
    },
  },
  {
    id: "doors-open-bell",
    name: "Doors Open Toronto — Bell Telephone Building (100 Years)",
    imagePath: "/background_images/doors_open_bell_bg.png",
    textColor: "text-white doors-open-outline",
    system:
      "Your task is to write a warm, nostalgic poem based on the provided image, taken during " +
      "Doors Open Toronto at the historic Bell Telephone Building on Birmingham Street — lovingly " +
      "restored and celebrating its 100th anniversary, a full century of service from 1926 to 2026. " +
      "This heritage open house invites the public to step through the open doors of a grand old " +
      "telephone exchange and honour a hundred years of connection. Weave in gentle nods to the golden " +
      "age of the telephone where it fits naturally: antique rotary dial phones, candlestick telephones, " +
      "switchboard operators, polished brass and dark walnut, the soft ring of a bell, and voices once " +
      "carried across humming copper wires connecting the city. Focus on heritage, craftsmanship, a " +
      "century of human connection, community, and the quiet wonder of stepping back in time. Even if the " +
      "image doesn't directly show telephones or the building, interpret it through the lens of vintage " +
      "telephony, heritage, and the celebratory spirit of this centennial Doors Open. Make the poem about " +
      "the person(s) in the image and their visit to this storied building.",
    description: "Warm, nostalgic poems marking 100 years (1926–2026) of the Bell Telephone Building at Doors Open Toronto — heritage, vintage telephones, and a century of connection.",
    imageDecoration1: "/decorations/Restored.png",
    imageDecorationsOnTop: {
      center: "/decorations/bell_building.png",
      right: "/decorations/rotary_phone.png",
      left: "/decorations/candlestick_phone.png",
    },
    poemBackgroundColor: {
      backgroundColor: "rgba(60,42,26,0.90)",
      border: "3px solid #B5894E",
      boxShadow: "0 0 0 2px rgba(60,42,26,0.90), 0 12px 30px rgba(60,42,26,0.35)",
    },
  },
  {
    id: "st-michael-picnic",
    name: "St. Michael's Ukrainian Catholic Church Picnic",
    imagePath: "/background_images/blue_gradient.png",
    textColor: "text-black dark:text-white",
    system:
      "Your task is to write a joyful and celebratory poem based on provided image which will be taken during St. Michael's Ukrainian Catholic Church Picnic. " +
      "Focus on community, fellowship, faith, tradition, Ukrainian heritage, and the wonderful moments that bring people together at a church picnic. " +
      "The image is from the picnic celebration, capturing the spirit of Ukrainian Catholic Church community gathering. " +
      "Even if the image doesn't directly show a church picnic, interpret it through the lens of community celebration, faith, and Ukrainian Catholic traditions. " +
      "Make the poem about the person(s) in the image and their connection to this special community event. " +
      "Include themes of blessing, gratitude, heritage, and the joy of sharing faith and culture together.",
    description: "Heartwarming poems celebrating community, faith, and Ukrainian heritage at St. Michael's Church Picnic.",
    imageDecoration1: "/decorations/stMichaelLogo.png",
    imageDecorationsOnTop: {
      center: "/decorations/crossAndKids.png",
      right: "/decorations/foodUkrainian.png",
      left: "/decorations/UkrainianFamily.png"
    },
    poemBackgroundColor: { backgroundColor: "rgba(70, 130, 180, 0.6)" }
  },
  {
    id: "isabella-8th-birthday",
    name: "Isabella's 8th Birthday",
    imagePath: "/background_images/pink_gradient.png",
    textColor: "text-black dark:text-white",
    system:
      "Your task is to write a cheerful and celebratory poem based on provided image which will be on a place of Isabella's 8th birthday celebration. "
      + "Focus on joy, fun, friendship, and all the wonderful moments that make a birthday special. "
      + "The image is on place of birthday celebration, the person on image is not directly Isabella that celebrates birthday, it can be just a friend or a family member. Don't mention if it is the birthday girl or not because you can not tell. "
      + "The name of who's birthday is Isabella."
      + "Even if the image doesn't directly show a birthday party, interpret it through the lens of birthday celebration and happiness."
      + " Make poem be about the person in the image.",
    description: "Joyful poems celebrating Isabella's special 8th birthday moments.",
    imageDecoration1: "/decorations/isabella.png",
    imageDecorationsOnTop: {
      center: "/decorations/birthday_with_4_people.png",
      right: "/decorations/bouncy_castle.png",
      left: "/decorations/baloons.png"
    },
    rightRight: "/decorations/palm.png",
    leftLeft: "/decorations/parrot.png",
    poemBackgroundColor: { backgroundColor: "rgba(96, 141, 177, 0.6)" }
  },
  {
    id: "blue-gradient",
    name: "Birmingham Business Centre Old Phones",
    imagePath: "/background_images/blue_gradient.png",
    textColor: "text-black dark:text-white",
    system:
      "Your task is to write a poem based on provided image which is inside office in Birmingham Business Centre building with old phones.",
    description: "Professional poems inspired by Birmingham Business Centre's office environment.",
    imageDecoration1: null,
    imageDecorationsOnTop: {
      center: null,
      right: null,
      left: null
    },
    poemBackgroundColor: { backgroundColor: "rgba(128, 128, 128, 0.5)" }
  },
  {
    id: "pink-gradient",
    name: "Lake Shore West Garden Tour",
    imagePath: "/background_images/lakeshore_garden_tour_bg.png",
    textColor: "text-white lakeshore-garden-outline",
    system:
      "Your task is to write a poem based on provided image which will be taken outside during the Lake Shore West Garden Tour event at Bell Garden Courtyard. " +
      "The event spans multiple locations but this particular image is from the Bell Garden Courtyard location. " +
      "Poem should rhyme" +
      "Even if you think image is not in garden pretend as it is.",
    description: "Serene poems capturing the outdoor beauty during Lake Shore West Garden Tour at Bell Garden Courtyard.",
    imageDecoration1: "/decorations/garden_tour.png",
    imageDecorationsOnTop: {
      center: "/decorations/flower_garden.png",
      right: "/decorations/pink_butterly.png",
      left: "/decorations/hummingbird.png"
    },
    poemBackgroundColor: {
      backgroundColor: "rgba(46, 76, 58, 0.88)",
      border: "3px solid #F4C8D4",
      boxShadow: "0 0 0 2px rgba(46,76,58,0.88), 0 12px 30px rgba(46,76,58,0.35)",
    },
    eventDate: {
      iso: "2026-06-20",
      display: "SATURDAY, JUN 20",
      time: "10AM - 4PM",
      day: 20,
    },
  },
  {
    id: "aman-graduation-party",
    name: "Aman's Graduation Party",
    imagePath: "/background_images/aman_graduation_indian_garden_bg.png",
    textColor: "text-white aman-graduation-outline",
    system:
      "Your task is to write a proud, joyful, and heartfelt poem based on the provided image, taken during Aman's Graduation Party on Sunday, June 21, 2026, from 6:30 PM to 10:30 PM. " +
      "Frame the celebration as an adult and refined Indian-inspired garden moment on the first day of summer, the longest day of the year, with Aman graduating and a bright future ahead. " +
      "This celebration honors Aman becoming Dr. Aman, surrounded by family, friends, congratulations, a graduation cap, diploma, realistic flowers and mature trees, marigolds, jasmine, and warm gold accents under the summer sun. " +
      "Weave in gentle graduation and garden details where they fit naturally: the cap and tassel, a rolled diploma, cheers from loved ones, proud smiles, marigolds, jasmine, teal and gold details, warm June sunlight, and the beginning of a meaningful medical journey. " +
      "Focus on achievement, gratitude, family pride, perseverance, new beginnings, and the joy of celebrating a milestone earned with care and dedication. " +
      "Even if the image doesn't directly show graduation details, interpret it through the lens of Aman's graduation celebration. " +
      "Make the poem about the person(s) in the image and their place in this proud evening gathering.",
    description: "Proud, joyful poems for Aman's Graduation Party — an adult Indian-inspired summer garden, marigolds, jasmine, caps, diplomas, family pride, and warm congratulations for Dr. Aman.",
    imageDecoration1: "/decorations/aman_graduation_indian_emblem.png",
    imageDecorationsOnTop: {
      center: "/decorations/aman_graduation_doctor.png",
      right: "/decorations/aman_graduation_stethoscope.png",
      left: "/decorations/aman_graduation_cap_diploma.png",
    },
    rightRight: "/decorations/aman_graduation_marigold_lanterns.png",
    leftLeft: "/decorations/aman_graduation_jasmine_garland.png",
    poemBackgroundColor: {
      backgroundColor: "rgba(27, 82, 78, 0.86)",
      border: "3px solid #E5B84A",
      boxShadow: "0 0 0 2px rgba(27,82,78,0.70), 0 10px 24px rgba(68,42,18,0.22)",
    },
    eventDate: {
      iso: "2026-06-21",
      display: "SUNDAY, JUNE 21",
      time: "6:30PM - 10:30PM",
      day: 21,
    },
  },
  {
    id: "girl-birthday",
    name: "Girl Birthday Celebration",
    imagePath: "/background_images/pink_gradient.png",
    textColor: "text-black dark:text-white",
    system:
      "Your task is to write a cheerful and celebratory poem based on provided image which will be on a place of girl's birthday celebration. "
      + "Focus on joy, fun, friendship, and all the wonderful moments that make a birthday special. "
      + "The image is on place of birthday celebration, the person on image is not directly girl that celeebrates birthday, it can be just a friend or a family member. Don't mention if it is the birthday girl or not because you can not tell. "
      + "The name of who's birthday is Girl."
      + "Even if the image doesn't directly show a birthday party, interpret it through the lens of birthday celebration and happiness."
      + " Make poem be about the person in the image.",
    description: "Joyful poems celebrating special birthday moments for girls.",
    imageDecoration1: "/decorations/girl_birthday.png",
    imageDecorationsOnTop: {
      center: "/decorations/birthday_with_4_people.png",
      right: "/decorations/bouncy_castle.png",
      left: "/decorations/baloons.png"
    },
    poemBackgroundColor: { backgroundColor: "rgba(128, 128, 128, 0.5)" }
  },
  {
    id: "girl-baptism",
    name: "Sophia's Baptism Party",
      imagePath: "/background_images/pink_gradient.png",
      textColor: "text-black dark:text-white",
      system:
      "Your task is to write a cheerful and celebratory poem based on provided image which will be on a place of girl's baptism celebration. "
      + "Focus on joy, blessing, family, and all the wonderful moments that make a baptism special. "
      + "The image is on place of baptism celebration, the person on image is not directly the girl being baptized, it can be just a friend or a family member. Don't mention if it is the baptized girl or not because you can not tell. "
      + "The name of who's baptism is Sophia."
      + "Even if the image doesn't directly show a baptism party, interpret it through the lens of baptism celebration and happiness."
      + " Make poem be about the person in the image.",
    description: "Joyful poems celebrating special baptism moments for girls.",

      imageDecoration1: "/decorations/girl_baptism.png",
      imageDecorationsOnTop: {
        center: "/decorations/fountain.png",
        right: "/decorations/Chritsian Bird With Water.png",
        left: "/decorations/bird_and_Christ.png"
      },
      poemBackgroundColor: { backgroundColor: "rgba(128, 128, 128, 0.5)" }

  }
];

// Dated events surface first (sorted by date ascending); undated themes
// keep their declaration order. This drives the order in the theme picker.
themes.sort((a, b) => {
  if (a.eventDate && b.eventDate) return a.eventDate.iso.localeCompare(b.eventDate.iso);
  if (a.eventDate) return -1;
  if (b.eventDate) return 1;
  return 0;
});

// Set a default theme initially
let currentTheme: Theme = themes[0];

// Set the current theme by its ID
export function setCurrentTheme(themeID: string): void {
  const theme = themes.find((t) => t.id === themeID);
  if (theme) {
    currentTheme = theme;
  } else {
    console.warn(`Theme with ID '${themeID}' not found.`);
  }
}

export default {
  get currentTheme() {
    return currentTheme;
  },
  setCurrentTheme,
};
