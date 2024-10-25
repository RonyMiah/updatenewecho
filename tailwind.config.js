/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    container: {
      center: true, // Use boolean true instead of string
    },
    screens: {
      sx: "310px",
    },
    fontFamily: {
      sans: ["var(--font-open-sans)"],
      bitter: ["var(--font-bitter)"],
    },
  },
};
export const plugins = [nextui()];

export const darkMode = "class";
