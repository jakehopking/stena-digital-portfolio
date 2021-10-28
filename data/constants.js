export const productTeamsDigitalBets = ["Now", "Next", "Future"];

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

export const phaseTitlesExplore = phaseTitles.slice(0, 9);
export const phaseTitlesExploit = phaseTitles.slice(9);

export const googleSheetsAuth = {
  client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY,
};

export const googleSheets = {
  techTrends: {
    sheetId: "15Npplc138znewXEbyi_RX3DYxhNKuEpI0OiQ-H_LDEU",
    worksheetId: "1559590224",
    formId: "1J9pVD7d_t6r63PTmCpR4SpETjzr_-m0mbzMod2vgpQg",
  },
  recyclingTrends: {
    sheetId: "15Npplc138znewXEbyi_RX3DYxhNKuEpI0OiQ-H_LDEU",
    worksheetId: "1559590224",
    formId: "1J9pVD7d_t6r63PTmCpR4SpETjzr_-m0mbzMod2vgpQg",
  },
};
