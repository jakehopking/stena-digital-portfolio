import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardProducts from "../components/organisms/DashboardProducts";
import data from "../data/data";

const {overviewPanelData, cmsData} = data;
const {digital_bets, overviewPanel, products, ideas} = cmsData;

export default function Products({ideas, products}) {
  return (
    <Layout
      sideCol={
        <SidePanel>
          <OverviewPanel
            {...overviewPanelData({
              ideas,
              products,
              overviewPanel,
            })}
          />
        </SidePanel>
      }
    >
      <DashboardProducts productsList={products} title="Products" />
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
