import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardProducts from "../components/organisms/DashboardProducts";
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
          <OverviewPanel
            {...overviewPanelData({
              products,
              ideas,
              projects,
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
      digital_bets,
      overviewPanel,
    },
  };
};
