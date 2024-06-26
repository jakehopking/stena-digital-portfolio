import {intToPx} from "../utils/css";

const defaultSpacingUnit = 20;

export const GREY = {
  _00: "#000000",
  _01: "#1C1C20",
  _02: "#18181C",
  _03: "#1F1F22",
  _04: "#2A2A30",
  _05: "#2A2B2C",
  _06: "#26262D",
  _08: "#3B3B44",
  _09: "#4B4B4B",
  _50: "#60625A",
  _70: "#8B8B8B",
  _90: "#F2F2F2",
  _100: "#FFFFFF",
};

export const GREEN = {
  _00: "#62BB64",
};

export const BLUE = {
  _00: "#89C0DC",
  _10: "#334678",
  _15: "#B1D5E7",
  _20: "#CDE3F1",
};

export const ORANGE = {
  _00: "#FFBC10",
  _20: "#D27429",
};

export const YELLOW = {
  _50: "#F2C94C",
};

export const PALLET = {
  primary: {...BLUE},
  secondary: {...GREEN},
  tertiary: {...ORANGE},
  grey: {...GREY},
};

export const COLOUR = {
  theme: {
    dark: {
      default: {
        background: GREY._00,
        foreground: GREY._100,
      },
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
        border: GREY._09,
      },
      panelSolid: {
        border: GREY._06,
        background: GREY._06,
      },
      card: {
        digitalBet: {
          background: GREY._04,
        },
      },
      tag: {
        internal: {
          border: BLUE._10,
          background: BLUE._10,
        },
        external: {
          border: GREY._50,
          background: GREY._02,
        },
      },
      text: {
        default: GREY._90,
        accent: BLUE._20,
        bigBet: YELLOW._50,
      },
      grid: {
        line: {
          default: GREY._05,
        },
      },
    },
    // Light theme. Unused.
    light: {
      default: {
        background: GREY._100,
        foreground: GREY._00,
      },
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
    _9: intToPx(defaultSpacingUnit * 5),
  },
  radius: {
    small: intToPx(3),
    default: intToPx(7),
    round: intToPx(10000),
  },
  grid: {
    main: intToPx(defaultSpacingUnit * 4),
  },
  font: {
    size: {
      xs: "0.775rem",
      sm: "0.889rem",
      p: "1.0rem",
      h1: "1.802rem",
      h2: "1.602rem",
      h3: "1.424rem",
      h4: "1.266rem",
      h5: "1.125rem",
      h6: "1.075rem",
    },
    weight: {
      hairline: 100,
      thin: 200,
      light: 300,
      medium: 400,
      bold: 600,
      bolder: 700,
      thick: 900,
    },
  },
};

export const CHART_SCHEMES = {
  one: ["rgba(0, 0, 0, 0.0)", "rgba(98, 187, 100, 1)", "rgba(235, 231, 224, 1)"],
  two: ["rgba(0, 0, 0, 0.0)", "rgba(177, 213, 231, 1)", "rgba(137, 192, 220, 1)"],
  three: [
    "rgba(51, 70, 120, 1)",
    "rgba(137, 192, 220, 1)",
    "rgba(236, 236, 236, 1)",
    "rgba(102, 199, 123, 1)",
  ],
  four: ["rgba(50, 50, 50, 1.0)", "#EBE7E0"],
};

export const COLOUR_MAP = {
  0: "--color-primary-0",
  1: "--color-tertiary-0",
  3: "--color-secondary-0",
};

export const CHART_THEME = {
  background: "transparent",
  textColor: GREY._00,
  labelTextColor: GREY._00,
  fontSize: 12,
  // axis: {
  //   domain: {
  //     line: {
  //       stroke: "#777777",
  //       strokeWidth: 1,
  //     },
  //   },
  //   ticks: {
  //     line: {
  //       stroke: "#777777",
  //       strokeWidth: 1,
  //     },
  //   },
  // },
  // grid: {
  //   line: {
  //     stroke: "#dddddd",
  //     strokeWidth: 1,
  //   },
  // },
};

export const OVERVIEW_PIE_THEME = {
  background: "transparent",
  textColor: GREY._100,
  labelTextColor: GREY._100,
  fontSize: 12,
  legends: {
    text: {
      fill: GREY._100,
    },
  },
  // axis: {
  //   domain: {
  //     line: {
  //       stroke: "#777777",
  //       strokeWidth: 1,
  //     },
  //   },
  //   ticks: {
  //     line: {
  //       stroke: "#777777",
  //       strokeWidth: 1,
  //     },
  //   },
  // },
  // grid: {
  //   line: {
  //     stroke: "#dddddd",
  //     strokeWidth: 1,
  //   },
  // },
};
