import {GoogleSpreadsheet} from "google-spreadsheet";
import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardTrends from "../components/organisms/DashboardTrends";
import data from "../data/data";
import {googleSheets, googleSheetsAuth} from "../data/constants";
import {worksheetSurveyData, googleFormsUrl, googleSheetUrl} from "../utils/googleSheets";

const {overviewPanelData, cmsData} = data;
const {digital_bets, overviewPanel} = cmsData;

export default function ProductTeams({digital_bets, techTrends, recyclingTrends}) {
  // debugger;
  const {projects} = digital_bets;

  return (
    <Layout
      home
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({projects, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardTrends
        techTrendsData={techTrends}
        recyclingTrendsData={recyclingTrends}
      />
    </Layout>
  );
}

export const getStaticProps = async () => {
  // Tech
  const googleTechSheet = new GoogleSpreadsheet(googleSheets.techTrends.sheetId);
  const techTrends = await worksheetSurveyData({
    auth: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: Buffer.from(process.env.GOOGLE_PRIVATE_KEY_64, "base64").toString(
        "ascii"
      ),
    },
    sheet: googleSheets.techTrends,
    googleSpreadsheet: googleTechSheet,
  });

  // Recycling
  const googleRecyclingSheet = new GoogleSpreadsheet(
    googleSheets.recyclingTrends.sheetId
  );
  const recyclingTrends = await worksheetSurveyData({
    auth: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: Buffer.from(process.env.GOOGLE_PRIVATE_KEY_64, "base64").toString(
        "ascii"
      ),
    },
    sheet: googleSheets.recyclingTrends,
    googleSpreadsheet: googleRecyclingSheet,
  });

  return {
    props: {
      digital_bets,
      overviewPanel,
      techTrends,
      recyclingTrends,
    },
  };
};
