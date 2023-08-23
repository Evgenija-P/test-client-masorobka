/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "txt-main-white": "#FFF5DA",
        "txt-main-red": "#D21C1C",
        "txt-main-black": "#282828",
        "txt-main-yellow": "#FBDD3D",
        "txt-grey": "#A3A3A3",
        "txt-light-grey": "#A9A393",
        "txt-marine": "#227D94",
        "bg-main": "#424242",
        "bg-grey": "#5E5E5E",
        "bg-light-grey": "#a3a3a3",
        "bg-white": "#FFF5DA",
        "bg-red": "#D21C1C",
        "bg-black": "#282828",
        "bg-yellow": "#FBDD3D",
        "bg-brown": "#3C291A",
        "bg-orange": "#DC8943",
        "bg-light-orange": "#D09E32",
      },
      fontFamily: {
        basic: "Roboto, sans-serif",
        review: "Nunito, sans-serif",
      },
      backgroundImage: {
        hero: "url('images/hero.jpg')",
        about: "url('images/about.jpg')",
        products: "url('images/waves.png')",
      },
      boxShadow: {
        soc: "0 5px 20px -5px rgba(251,221,61,1)",
        btnRed: "0 0 14px 14px rgba(210,28,28,0.4)",
        btnRedS: "0 0 4px 4px rgba(210,28,28,0.4)",
        btnBlack: "0 0 14px 14px rgba(40,40,40,0.4)",
        btnBlackSmall: "0 0 6px 6px rgba(40,40,40,0.4)",
        btnWhite: "0 0 14px 14px rgba(255,245,218,0.4)",
        btnWhiteS: "0 0 4px 4px rgba(255,245,218,0.4)",
        swiper: "0 0 5px 5px rgba(255,245,218,0.4)",
      },
      gridTemplateColumns: {
        productItem: "50% 25% 20% 5%",
      },
      keyframes: {
        rotate: {
          "0%": {
            transform: "translateY(0) rotate(0) ",
          },
          "100%": {
            transform: "translateY(40px) rotate(180deg)",
          },
        },
      },
      animation: {
        rotate: "rotate 1s forwards",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};
