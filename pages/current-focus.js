import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardCurrentFocus from "../components/organisms/DashboardCurrentFocus";
import data from "../data/data";

const {overviewPanelData, circlePackingOne, circlePackingTwo, cmsData} = data;
const {ideas, products, currentFocus, overviewPanel} = cmsData;

export default function CurrentFocus({currentFocus, ideas, products, overviewPanel}) {
  return (
    <Layout
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({ideas, products, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardCurrentFocus chartData={currentFocus} title="Current focus" />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      ...{
        ideas: ideas.ideas,
        products: products.products,
        currentFocus: currentFocus.currentFocus,
      },
      overviewPanel,
    },
  };
};
