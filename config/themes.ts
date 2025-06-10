export interface Theme {
  id: string;
  name: string;
  imagePath: string;
  textColor: string;
}

export const themes: Theme[] = [
  {
    id: "blue-gradient",
    name: "Blue Gradient",
    imagePath: "/background_images/blue_gradient.png",
    textColor: "text-black dark:text-white",
  },
  // Add more themes here as needed
];

export const defaultTheme = themes[0]; 