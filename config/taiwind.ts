export const tailwindConfig = {
  colors: {
    white: "#FFFFFF",
    shinyBlack: "#000000",
    primary: "#2C8A4F",
    secondary: "#21683B",
    error: "#FF0033",
    black: "#1B201D",
    black2: "#1E232D",
    guid: "#EEF6F1",
    pagination: "#D9D9D9",
    gray: "#8E9792",
    lightGray: "#BCC5BF",
    secondaryWhite: "#F7FAF8",
    layout: "#FBFDFB",
    editBG: "#21683B",
    errorRed: "#BC1933",
    bgMark: "rgba(0,0,0,0.4)",
    bgAdvertising: "rgba(0, 0, 0, 0.88)",
    lightInput: "#F2F4FC",
  },
  fontSize: {
    xxxsm: ["0.463125rem", "0.74125rem"], //["7.41px", "11.86px"]
    xxsm: ["0.5rem", "0.8rem"], //["8px", "12.8px"]
    xsm: ["0.595625rem", "0.953125rem"], //["9.53px", "15.25px"]
    sm: ["0.625rem", "1rem"], //["10px", 16px]
    sm2: ["0.625rem", "0.75rem"], //["10px", 12px]
    big: ["1.25rem", "1.6rem"], //["20px", 25.6px]
    sml: ["0.6875rem", "1.1rem"], //["11px", "17.6px"]
    base: ["0.75rem", "1.2rem"], //["12px", "19.2px"]
    base2: ["0.75rem", "0.9rem"], //["12px", "14.4px"]
    md: ["0.82375rem", "1.3175rem"], //["13.18px", "21.08px"]
    md2: ["0.8125rem", "1.3rem"], //["13px", "20.8px"]
    wl: ["0.875rem", "1.4rem"], //["14px", "22.4px"]
    lg: ["0.875rem"], //["14px"]
    lg2: ["0.916rem", "1.466rem"], //["14.66px", "23.46px"]
    lg3: ["0.938rem", "1.5rem"], //["15px", "24px"]
    xl: ["1rem", "1.6rem"], //["16px", "25.6px"]
    xl2: ["1.125rem"], //["18px"]
    xl2xxs: ["1.125rem", "1.8rem"], //["18px", ["28.8px"]]
    xl2xs: ["1.125rem", "1.6rem"], //["18px", "25.6px"]
    xl2x: ["1.25rem", "1.6rem"], //["20px", "25.6px"]
    xl2s: ["1.25rem"], //["20px"]
    xl3sm: ["1.375rem", "1.6rem"],
    xl3: ["1.5rem", "1.65rem"], //["24px", "26.4px"]
    xl4: ["1.75rem", "1.6rem"], //["28px", "25.6px"]
  },
  placeholderColor: {
    primary: "#1B201D",
  },
  fontFamily: {
    barlow: ["Barlow", "sans-serif"],
  },
  fontWeight: {
    350: 350,
  },
  padding: {
    2.75: "0.6875rem", //'11px',
    4.5: "1.125rem", //18px
    4.75: "1.1875rem", // 19px
    6.75: "1.6875rem", //'27px',
    7.75: "1.9375rem", //31px,
    13.75: "3.4375", //55px
    18: "4.5rem", //'72px',
    22: "5.5rem", //88px,
    24.5: "6.0625rem", // 97px,
    39: "9.8125rem", //157px,
    container: "2.6875rem", //48px
    walletButton: "11px",
  },
  margin: {
    4.5: "1.125rem", //18px
    8.5: "2.215rem", // 34px
    15.5: "3.875rem", //62px
    7.5: "1.875rem", //'30px',
    container: "2.6875rem", //48px
  },
  height: {
    2.75: "0.6875rem", //'11px',
    4.25: "1.0625rem", // 17px
    4.75: "1.1875rem", // 19px
    5.25: "1.3125rem", // 21px
    6.75: "1.6875rem", //'27px',
    9.5: "2.375rem", // 38px
    9.75: "2.4375rem", // 39px
    14.5: "3.625rem", //58px
    32.5: "8.125rem", //130px
    43.5: "10.8125rem", //173px
    70: "17.5rem", //280px
  },
  width: {
    4.25: "1.0625rem", // 17px
    16.5: "4.125rem", //66px
    56.5: "14.125rem", // 226px
  },
  zIndex: {
    1: "1",
    2: "2",
    3: "3",
  },
  screens: {
    xxxs: "150px",
    // => @media (min-width: 280px) { ... }

    xxs: "280px",
    // => @media (min-width: 280px) { ... }

    xs: "320px",
    // => @media (min-width: 320px) { ... }

    xss: "349px",
    // => @media (min-width: 349px) { ... }

    xsmobile: "350px",
    // => @media (min-width: 350px) { ... }

    mobile: "376px",
    // => @media (min-width: 376px) { ... }

    xsx: "380px",
    // => @media (min-width: 380px) { ... }

    xsr: "390px",
    // => @media (min-width: 390px) { ... }

    xsm: "400px",
    // => @media (min-width: 400px) { ... }

    sms: "430px",
    // => @media (min-width: 430px) { ... }

    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
};
