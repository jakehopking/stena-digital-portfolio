import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardProducts from "../components/organisms/DashboardProducts";
import data from "../data/data";

const {overviewPanelData, cmsData} = data;
const {digital_bets, overviewPanel, products} = cmsData;

export default function Products({digital_bets, ideas}) {
  const {projects} = digital_bets;

  // debugger;

  return (
    <Layout
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({projects, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardProducts productsList={products.products} title="Products" />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      products,
      digital_bets,
      overviewPanel,
    },
  };
};
