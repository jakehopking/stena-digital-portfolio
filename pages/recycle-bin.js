import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardRecycleBin from "../components/organisms/DashboardRecycleBin";
import data from "../data/data";

const {overviewPanelData, cmsData} = data;
const {ideas, products, overviewPanel} = cmsData;

export default function Products({ideas, products}) {
  return (
    <Layout
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({ideas, products, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardRecycleBin
        productsList={products}
        ideasList={ideas}
        title="Recycle bin"
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
