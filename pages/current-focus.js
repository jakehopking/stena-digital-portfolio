import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardCurrentFocus from "../components/organisms/DashboardCurrentFocus";
import data from "../data/data";

const {overviewPanelData, circlePackingOne, circlePackingTwo, cmsData} = data;
const {ideas, products, overviewPanel} = cmsData;

export default function CurrentFocus({ideas, products, overviewPanel}) {
  return (
    <Layout
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({ideas, products, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardCurrentFocus
        chartData={{circlePackingOne, circlePackingTwo}}
        title="Current focus"
      />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      ...{
        ideas: ideas.ideas,
        products: products.products,
      },
      overviewPanel,
    },
  };
};
