import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardProducts from "../components/organisms/DashboardProducts";
import data from "../data/data";
import {getGroupedListByKey} from "../utils/general";

const {overviewPanelData, circlePackingOne, circlePackingTwo, cmsData} = data;
const {digital_bets, overviewPanel, products} = cmsData;

export default function Products({digital_bets, products}) {
  const {projects} = digital_bets;

  // debugger;

  return (
    <Layout
      home
      showGrid
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({projects, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardProducts
        rows
        productsList={products.products}
        chartData={{circlePackingOne, circlePackingTwo}}
      />
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
