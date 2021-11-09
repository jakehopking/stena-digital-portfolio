import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardEvents from "../components/organisms/DashboardEvents";
import data from "../data/data";

const {overviewPanelData, cmsData} = data;
const {events, ideas, products, overviewPanel} = cmsData;

export default function Events({events, ideas, products, overviewPanel}) {
  // debugger;
  return (
    <Layout
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({ideas, products, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardEvents eventData={events} title={"Upcoming innovation events"} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      ...{
        events: events.events,
        ideas: ideas.ideas,
        products: products.products,
      },
      overviewPanel,
    },
  };
};
