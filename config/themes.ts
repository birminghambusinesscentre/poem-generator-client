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
}

export const themes: Theme[] = [
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
    imagePath: "/background_images/pink_gradient.png",
    textColor: "text-black dark:text-white",
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
    poemBackgroundColor: { backgroundColor: "rgba(128, 128, 128, 0.5)" }

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
