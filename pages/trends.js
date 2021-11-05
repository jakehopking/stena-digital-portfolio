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
  const auth = {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  };

  // Tech
  const techTrends = await worksheetSurveyData({
    auth,
    sheet: googleSheets.techTrends,
    googleSpreadsheet: new GoogleSpreadsheet(googleSheets.techTrends.sheetId),
  });

  // Recycling
  const recyclingTrends = await worksheetSurveyData({
    auth,
    sheet: googleSheets.recyclingTrends,
    googleSpreadsheet: new GoogleSpreadsheet(googleSheets.recyclingTrends.sheetId),
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
