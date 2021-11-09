import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardIdeas from "../components/organisms/DashboardIdeas";
import data from "../data/data";
import {phaseTitlesExploit} from "../data/constants";
import {organiseListByKeyNew} from "../utils/general";

const {overviewPanelData, cmsData} = data;
const {ideas, products, overviewPanel} = cmsData;

export default function Ideas({ideas, products}) {
  return (
    <Layout
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({ideas, products, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardIdeas ideasList={ideas} title="Ideas" />
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
