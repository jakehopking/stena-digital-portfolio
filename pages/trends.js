import {GoogleSpreadsheet} from "google-spreadsheet";
import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardStage from "../components/organisms/DashboardStage";
import data from "../data/data";
import {phaseTitlesExploit} from "../data/constants";
import {organiseListByKey, serializeRow} from "../utils/general";
import {googleSheets, googleSheetsAuth} from "../data/constants";
import {worksheetSurveyData} from "../utils/googleSheets";

const {overviewPanelData, cmsData} = data;
const {digital_bets, overviewPanel} = cmsData;

const DashboardProjects = ({}) => {
  return (
    <div className="dashboard-projects">
      <div className="container">
        <section className="dashboard-projects__title u-p">Trends</section>
        <section className="dashboard-projects__grid grid grid--250">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </section>
      </div>
    </div>
  );
};

export default function ProductTeams({digital_bets, techTrends}) {
  // debugger;
  const {projects} = digital_bets;

  console.log(techTrends);

  return (
    <Layout
      home
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({projects, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardProjects />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const googleTechSheet = new GoogleSpreadsheet(googleSheets.techTrends.sheetId);
  const techTrends = await worksheetSurveyData({
    auth: googleSheetsAuth,
    sheet: googleSheets.techTrends,
    googleSpreadsheet: googleTechSheet,
  });

  return {
    props: {
      digital_bets,
      overviewPanel,
      techTrends,
    },
    revalidate: 1,
  };
};
