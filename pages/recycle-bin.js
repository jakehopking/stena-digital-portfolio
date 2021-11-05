import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardRecycleBin from "../components/organisms/DashboardRecycleBin";
import data from "../data/data";

const {overviewPanelData, cmsData} = data;
const {digital_bets, overviewPanel, products, ideas} = cmsData;

export default function Products({digital_bets, ideas, products}) {
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
      <DashboardRecycleBin
        productsList={products.products}
        ideasList={ideas.ideas}
        title="Recycle bin"
      />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      ideas,
      products,
      digital_bets,
      overviewPanel,
    },
  };
};
