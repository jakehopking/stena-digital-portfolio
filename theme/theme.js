import {intToPx} from "../utils/css";

const defaultRadius = 7;
const defaultSpacingUnit = 20;

export const GREY = {
  _00: "#000000",
  _02: "#18181C",
  _03: "#1F1F22",
  _04: "#2A2A30",
  _05: "#2A2B2C",
  _08: "#3B3B44",
  _50: "#60625A",
  _90: "#F2F2F2",
  _100: "#FFFFFF",
};

export const GREEN = {
  _00: "#62BB64",
};

export const BLUE = {
  _00: "#89C0DC",
  _20: "#CDE3F1",
};

export const ORANGE = {
  _00: "#FFBC10",
};

export const PALLET = {
  beta: {...BLUE},
  gamma: {...GREEN},
  delta: {...ORANGE},
  grey: {...GREY},
};

export const COLOUR = {
  theme: {
    dark: {
      background: GREY._03,
      button: {
        nav: {
          background: {active: GREY._50},
        },
      },
      navigation: {
        background: GREY._00,
      },
      panel: {
        background: GREY._02,
      },
      card: {
        digitalBet: {
          background: GREY._04,
        },
      },
      text: {
        default: GREY._90,
        accent: BLUE._20,
      },
      grid: {
        line: {
          default: GREY._05,
        },
      },
    },
    // Light theme. Unused.
    light: {
      background: GREY._90,
      button: {
        nav: {
          background: {active: GREY._100},
        },
      },
      navigation: {
        background: GREY._0,
      },
      panel: {
        background: GREY._02,
      },
      text: GREY._05,
    },
  },
};

export const SIZE = {
  bp: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
  spacing: {
    _0: 0,
    _1: intToPx(defaultSpacingUnit * 0.25),
    _2: intToPx(defaultSpacingUnit * 0.5),
    _3: intToPx(defaultSpacingUnit * 0.75),
    _4: intToPx(defaultSpacingUnit),
    _5: intToPx(defaultSpacingUnit * 1.5),
    _6: intToPx(defaultSpacingUnit * 2),
    _7: intToPx(defaultSpacingUnit * 3),
    _8: intToPx(defaultSpacingUnit * 4),
  },
  radius: {
    default: intToPx(defaultRadius),
    button: intToPx(defaultRadius),
  },
  grid: {
    main: intToPx(defaultSpacingUnit * 4),
  },
  font: {
    // small,
    // p,
    // h1,
    // h2,
    // h3,
    // h4,
    // h5,
    // h6
  },
};
