import {useContext} from "react";
import {getDatabase} from "../lib/notion";
import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardStage from "../components/organisms/DashboardStage";
import {
  getColumnMultiSelectTags,
  getColumnSelectTags,
  filterByColName,
  getMappedListFromColumnTitleSelectTags,
} from "../utils/notion";
import {filterFn} from "../utils/general";
import {
  productTeamsDigitalBets,
  phaseTitlesExplore,
  phaseTitlesExploit,
} from "../data/constants";
// import {NetlifyCMSContext} from "../context/netlifyCmsContext";
import data from "../data/data";

export const databaseId = process.env.NOTION_DB_PORTFOLIO_TRACKER;

const {overviewPanelData, circlePackingOne, circlePackingTwo, cmsData} = data;

export default function ProductTeams({
  bigBetTags,
  exploreExploitTags,
  investmentTags,
  cmsData,
}) {
  const {projects} = cmsData;

  const test = projects.filter((item) => filterFn(item.phase, phaseTitlesExplore));

  console.log(test);

  return (
    <Layout
      home
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({projects})} />
        </SidePanel>
      }
    >
      <DashboardStage
        rows
        digitalBetsList={projects}
        chartData={{circlePackingOne, circlePackingTwo}}
      />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      cmsData,
    },
    revalidate: 1,
  };
};
