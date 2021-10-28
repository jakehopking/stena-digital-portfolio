export const worksheetSurveyData = async ({
  auth,
  sheet,
  googleSpreadsheet,
  log = false,
}) => {
  // new GoogleSpreadsheet needs to be passed into this function, therefore the following line serves as reference only
  // const googleSpreadsheet = new GoogleSpreadsheet(sheet.sheetId);

  // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  await googleSpreadsheet.useServiceAccountAuth({
    client_email: auth.client_email,
    private_key: auth.private_key,
  });

  await googleSpreadsheet.loadInfo(); // loads document properties and worksheets

  const worksheet = await googleSpreadsheet.sheetsById[sheet.worksheetId].getRows();
  const dataArray = worksheet.map((item) => {
    let date, email, answer, rest;
    [date, email, answer, ...rest] = item._rawData;
    return {
      date,
      email,
      answer,
    };
  });

  if (log) {
    console.log(googleSpreadsheet.title);
    console.log(dataArray);
    console.log(worksheet);
  }

  return {
    title: googleSpreadsheet.title,
    data: dataArray,
  };
};

export const googleSheetUrl = (sheetId, worksheetId) =>
  `https://docs.google.com/spreadsheets/d/${sheetId}/edit?resourcekey#gid=${worksheetId}`;

export const googleFormsUrl = (formId) => `https://docs.google.com/forms/d/${formId}`;
