/** @type {import('tailwindcss').Config} */

import { colors } from "tailwindcss/defaultTheme";
import { defaultTheme } from "tailwindcss/defaultTheme";
import { screens } from "tailwindcss/defaultTheme";

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["OpenSans", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      roboto: ["RobotoSlab", "sans-serif"],
      mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"],
    },
    screens: {
      ...screens,
      tiny: { min: "0px", max: "370px" },
    },
    backgroundImage: {
      // Various icons
      logo_lk_big: "url('/src/assets/icons/logo_lk_big.svg')",
      icon_bankid: "url('/src/assets/icons/logo_bankid.svg')",
      icon_sweden: "url('/src/assets/icons/icon_sweden.svg')",
      icon_user: "url('/src/assets/icons/icon_shovel.svg')",
      icon_adresscard: "url('/src/assets/icons/icon_adresscard.svg')",
      background_earth: "url('/src/assets/images/background_earth.jpg')",
    },
    colors: {
      ...defaultTheme,
      orange: {
        ...colors.orange,
        primary: "#F47C3D",
        primaryHover: "#F8915B",
      },
      beige: { ...colors.beige, background: "#FAF9F8", image: "#EED9BC" },
      blue: {
        ...colors.blue,
        primary: "#064B97",
        primaryHover: "#064B97CC",
        secondary: "#D1E7F1",
        secondaryHover: "#D1E7F180",
        link: "#4A5EA5",
      },
      grey: {
        ...colors.grey,
        background: "#F6F6F6",
        darkTextAndIcon: "#212121",
        icon: "#666666",
        border: "#CCCCCC",
        borderLight: "#F6F6F6",
        hover: "#F6F6F6",
      },
      green: {
        ...colors.green,
        primary: "#3C763D",
        background: "rgba(60, 118, 61, 0.08)",
      },
      yellow: {
        ...colors.yellow,
        primary: "#F9A825",
        background: "rgba(249, 168, 37, 0.08)",
      },
      red: {
        ...colors.red,
        primary: "#B40E0E",
      },
    },
    minWidth: {
      2.5: "10rem",
    },
    minHeight: {
      17.5: "4.375rem",
    },
    height: {
      17.5: "4.375rem",
    },
    backgroundPosition: {
      "left-button-icon-margin": "center left 1rem",
    },
    borderRadius: {
      button: "0.313rem",
    },
    fontSize: {
      h1: ["1.375rem", { lineHeight: "1.813rem" }],
      h2: ["1.125rem", { lineHeight: "1.481rem" }],
      12: ["0.75rem", { lineHeight: "1.481rem" }],
      14: ["0.875rem", { lineHeight: "1.481rem" }],
      16: ["1rem", { lineHeight: "1.363rem" }],
      link: ["0.85rem", { lineHeight: "1.481rem" }],
    },
    spacing: {
      screen: "100vh",
      7.5: "1.875rem",
    },
  },
};
export const plugins = [];

// Marginaler

// Ikon <-> Text
// Default 8px
// Boxar och sektioner 16px
// Checkbox/radioknapp 16px

// Marginal (alla riktningar)
// Default 12px
// Rubrik i formulär 20px (top)
// Fristående textmassa 20px (bottom)

// Sista elementet på sidan <-> Rad med knappar
// Default 50px

// Marginal under sista elementet på sidan
// Default 30px

// Höjd
// Boxar och sektioner 70px
// Stor knapp 70px
// Normal knapp 45px
// Inmatningsfält 40px

// Header (höjd)
// Default 106px
// Sektion/Popup 70px
// App-header 55px

// Ikoner (maxvärde)
// Default 24px x 24px
// Normal knapp 18px x 18px
// Varning/felmeddelande 18px x 18px
// Navigering (gå till/dölj/visa/stäng popup) 12px x 12px
// Ikon med text 18px x 18px
