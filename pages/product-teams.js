import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardStage from "../components/organisms/DashboardStage";
import data from "../data/data";

export const databaseId = process.env.NOTION_DB_PORTFOLIO_TRACKER;

const {overviewPanelData, circlePackingOne, circlePackingTwo, cmsData} = data;

export default function ProductTeams({cmsData}) {
  const {projects} = cmsData;

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
  return {
    props: {
      cmsData,
    },
    revalidate: 1,
  };
};
