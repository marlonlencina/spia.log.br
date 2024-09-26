const { addIconSelectors } = require("@iconify/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,js}"],
  theme: {
    colors: {
      BLACK: "#040404",
      BLUE_PRIMARY: "#2C4BEF",
      BLUE_HOVER: "#1E3ACA",
      WHITE: "#FFFFFF",
      STROKE: "#1B1B1F",
      GRAY_800: "#070707",
      GRAY_700: "#0A0A0A",
      GRAY_600: "#0A0A0B",
      GRAY_600_0: "#0A0A0B00",
      BLUE_OPACITY_TABLE: "#1732BC",
      GREEN_OPACITY_TABLE: "#0B967A",
      GRAY_OPACITY_TABLE: "#2D2D36",
    },
    fontFamily: {
      BODY: ["Manrope", "sans-serif"],
      HEAD: ["halyard-display", "sans-serif"],
    },
    extend: {
      fontSize: {
        sm10: "0.625rem",
        sm12: "0.75rem",
        sm14: "0.875rem",
        sub24: "1.5rem",
        sub32: "2rem",
        sub40: "2.5rem",
        sub48: "3rem",
        sub56: "3.5rem",
        caption16: "1rem",
        caption18: "1.125rem",
        body14: "0.875rem",
        body16: "1rem",
        body18: "1.125rem",
        body20: "1.25rem",
        button16: "1rem",
        button18: "1.125rem",
        head24: "1.5rem",
        head32: "2rem",
        head40: "2.5rem",
        head48: "3rem",
        head56: "3.5rem",
        head64: "4rem",
      },
      backgroundImage: {
        "bg-preco-futuro-do-frete":
          "url('/assets/bg-preco-futuro-do-frete.png')",
        "bg-demandas-de-veiculos-com-ia":
          "url('assets/bg-demandas-de-veiculos-com-ia.png')",
        "bg-call-to-action": "url('assets/call-to-action-banner.png')",
        "bg-mapa-do-brasil": "url('assets/bg-mapa-do-brasil-vetor.svg')",
      },
    },
  },
};
