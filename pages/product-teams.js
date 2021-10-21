import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardStage from "../components/organisms/DashboardStage";
import data from "../data/data";
import {getGroupedListByKey} from "../utils/general";

const {overviewPanelData, circlePackingOne, circlePackingTwo, cmsData} = data;
const {digital_bets} = cmsData;

export default function ProductTeams({digital_bets}) {
  const {projects} = digital_bets;
  debugger;

  return (
    <Layout
      home
      showGrid
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
      digital_bets,
    },
    revalidate: 1,
  };
};
