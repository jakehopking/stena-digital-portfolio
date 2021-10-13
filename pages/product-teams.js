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
import {productTeamsDigitalBets} from "../data/constants";
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

  return (
    <Layout
      home
      sideCol={
        <SidePanel>
          <OverviewPanel
            {...overviewPanelData({exploreExploitTags, bigBetTags, investmentTags})}
          />
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
      // notion: database,
      // entryTitleCount: titleCount(database),
      cmsData,
      journeyStageTags: getColumnMultiSelectTags(database, "Lifecycle stage relevance"),
      exploreExploitTags: getColumnSelectTags(database, "Explore / Exploit"),
      investmentTags: getColumnSelectTags(database, "Investment"),
      bigBetTags: getColumnMultiSelectTags(database, "Big bet"),
      statusTags: getColumnSelectTags(database, "Status"),
    },
    revalidate: 1,
  };
};
