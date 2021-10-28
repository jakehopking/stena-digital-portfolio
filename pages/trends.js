import {GoogleSpreadsheet} from "google-spreadsheet";
import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardStage from "../components/organisms/DashboardStage";
import data from "../data/data";
import {phaseTitlesExploit} from "../data/constants";
import {organiseListByKey, serializeRow} from "../utils/general";

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

export default function ProductTeams({digital_bets, test}) {
  const {projects} = digital_bets;

  console.log(test);

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
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(process.env.TECH_TRENDS_SHEET_ID);

  // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const techWorksheet = doc.sheetsById[process.env.TECH_TRENDS_GID];
  // console.log(techWorksheet);
  const techTrends = await techWorksheet.getRows();
  // const serializedRows = techTrends.map((row) => serializeRow(row, techTrends));
  console.log(techTrends);
  const test = techTrends.map((item) => {
    let date, email, answer;
    [date, email, answer] = item._rawData;
    return {
      date,
      email,
      answer,
      // email: item["Email Address"],
      // answer: item["What do you see as the most important tech trend for 2022?"],
    };
  });
  console.log(test);
  // // await doc.updateProperties({title: "renamed doc"});

  return {
    props: {
      digital_bets,
      overviewPanel,
    },
    revalidate: 1,
  };
};
