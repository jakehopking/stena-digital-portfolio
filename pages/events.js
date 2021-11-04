import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardEvents from "../components/organisms/DashboardEvents";
import data from "../data/data";

const {overviewPanelData, cmsData} = data;
const {digital_bets, focus_areas, events, overviewPanel} = cmsData;

export default function Events({digital_bets, events, focus_areas, overviewPanel}) {
  const {projects} = digital_bets;

  // const exploreList = organiseListByKey({
  //   listArray: projects,
  //   filterList: phaseTitlesExploit,
  // });
  // const exploitList = organiseListByKey({
  //   listArray: projects,
  //   categoryName: "exploit",
  //   filterList: phaseTitlesExploit,
  // });

  // console.log(maxEffort);
  // console.log(exploitList);

  return (
    <Layout
      home
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({projects, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardEvents focusData={focus_areas.focus_areas} eventData={events.events} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      digital_bets,
      events,
      focus_areas,
      overviewPanel,
    },
  };
};