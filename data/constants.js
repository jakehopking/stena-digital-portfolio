require("dotenv").config({
  path: `./.env.${process.env.NODE_ENV}`,
});

// Order to render the digital bets lists on products page.
export const productTitlesSortOrder = [
  "Future",
  "Next",
  "0%",
  "50%",
  "100%",
  "Launched product",
];

// Order to render the digital bets lists on ideas page.
export const ideaTitlesSortOrder = [
  "New ideas",
  "Test",
  "Deep test",
  "Dragons den",
  "Transfer to product",
];

// Overview panel title groups for filtering and counting results
export const overviewPanelTitleGroups = {
  ideas: {
    new: ideaTitlesSortOrder,
    validation: ["Test", "Deep test", "Dragons den"],
    transfer: ["Transfer to product"],
  },
  products: {
    future: ["Future"],
    next: ["Next"],
    onGoing: ["0%", "50%", "100%"],
    launched: ["Launched product"],
  },
};

// Used for carousel mode, and for main navbar links (excludes 'tools')
export const mainNavPageRoutes = [
  {
    title: "Trends",
    route: "/trends",
  },
  {
    title: "Current Focus",
    route: "/current-focus",
  },
  {
    title: "Events",
    route: "/events",
  },
  {
    title: "Ideas",
    route: "/ideas",
  },
  {
    title: "Products",
    route: "/",
  },
  {
    title: "Recycle Bin",
    route: "/recycle-bin",
  },
];

export const googleSheets = {
  techTrends: {
    sheetId: "15Npplc138znewXEbyi_RX3DYxhNKuEpI0OiQ-H_LDEU",
    worksheetId: "1559590224",
    formId: "1J9pVD7d_t6r63PTmCpR4SpETjzr_-m0mbzMod2vgpQg",
  },
  recyclingTrends: {
    sheetId: "145w93W9aPb3I-rtQKOClFIy5H4cs6D4PbFnTBRCqrAk",
    worksheetId: "1662726542",
    formId: "15RXaLyQMrlJ8-7yxOUL9G0lRNOVq3d9r4RPoG9Llsr4",
  },
};
