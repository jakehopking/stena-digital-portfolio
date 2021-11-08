import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardIdeas from "../components/organisms/DashboardIdeas";
import data from "../data/data";
import {phaseTitlesExploit} from "../data/constants";
import {organiseListByKeyNew} from "../utils/general";

const {overviewPanelData, cmsData} = data;
const {digital_bets, ideas, overviewPanel} = cmsData;

export default function Ideas({digital_bets, ideas}) {
  const {projects} = digital_bets;

  return (
    <Layout
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({projects, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardIdeas ideasList={ideas.ideas} title="Ideas" />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      ideas,
      digital_bets,
      overviewPanel,
    },
  };
};
