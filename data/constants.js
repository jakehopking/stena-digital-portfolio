require("dotenv").config({
  path: `./.env.${process.env.NODE_ENV}`,
});

// Order to render the digital bets list on products page.
export const productTitlesSortOrder = [
  "Future",
  "Next",
  "0%",
  "50%",
  "100%",
  "Launched product",
];

// Order to render the digital bets list on ideas page.
export const ideaTitlesSortOrder = [
  "New ideas",
  "Test",
  "Deep test",
  "Dragons den",
  "Transfer to product",
];

// Deprecated
export const productTeamsDigitalBets = ["Now", "Next", "Future"];

// Deprecated
export const phaseTitles = [
  "Ideation",
  "Discovery",
  "Validation",
  "Confirmation",
  "Transfer",
  "Launch",
  "Sustaining innovation",
  "Efficiency",
  "Mature business",
  "Declining business",
  "Renovation",
];

// Deprecated
export const phaseTitlesExplore = phaseTitles.slice(0, 9);
export const phaseTitlesExploit = phaseTitles.slice(9);

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
