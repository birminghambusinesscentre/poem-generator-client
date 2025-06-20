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
}

export const themes: Theme[] = [
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
    }
  },
  {
    id: "pink-gradient",
    name: "Bell Garden Tour",
    imagePath: "/background_images/pink_gradient.png",
    textColor: "text-black dark:text-white",
    system:
      "Your task is to write a poem based on provided image which will be about sitting in beautiful garden at the Bell Garden Courtyard event space. Even if you think image is not in garden pretend as it is.",
    description: "Serene poems capturing the beauty of Bell Garden Courtyard event space.",
    imageDecoration1: null,
    imageDecorationsOnTop: {
      center: null,
      right: null,
      left: null
    }

  },
  {
    id: "girl-birthday",
    name: "Sophia's Birthday Celebration",
    imagePath: "/background_images/pink_gradient.png",
    textColor: "text-black dark:text-white",
    system:
      "Your task is to write a cheerful and celebratory poem based on provided image which will be on a place of girl's birthday celebration. "
      + "Focus on joy, fun, friendship, and all the wonderful moments that make a birthday special. "
      + "The image is on place of birthday celebration, the person on image is not directly girl that celeebrates birthday, it can be just a friend or a family member. Don't mention if it is the birthday girl or not because you can not tell. "
      + "The name of who's birthday is Sophia."
      + "Even if the image doesn't directly show a birthday party, interpret it through the lens of birthday celebration and happiness." 
      + " Make poem be about the person in the image.",
    description: "Joyful poems celebrating special birthday moments for girls.",
    imageDecoration1: "/decorations/girl_birthday.png",
    imageDecorationsOnTop: {
      center: "/decorations/birthday_with_4_people.png",
      right: "/decorations/bouncy_castle.png",
      left: "/decorations/baloons.png"
    }

  },
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
