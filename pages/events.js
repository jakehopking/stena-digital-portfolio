import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardEvents from "../components/organisms/DashboardEvents";
import data from "../data/data";

const {overviewPanelData, cmsData} = data;
const {digital_bets, focus_areas, events, overviewPanel} = cmsData;

export default function Events({digital_bets, events, focus_areas, overviewPanel}) {
  const {projects} = digital_bets;

  return (
    <Layout
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({projects, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardEvents
        focusData={focus_areas.focus_areas}
        eventData={events.events}
        title="Events"
      />
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
