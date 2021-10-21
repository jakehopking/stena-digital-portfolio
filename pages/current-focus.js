import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import FocusList from "../components/organisms/FocusList";
import EventList from "../components/organisms/EventList";
import data from "../data/data";
import {phaseTitlesExploit} from "../data/constants";
import {organiseListByKey} from "../utils/general";

export const databaseId = process.env.NOTION_DB_PORTFOLIO_TRACKER;

const {overviewPanelData, cmsData} = data;
const {digital_bets, focus_areas, events} = cmsData;

const DashboardCurrentFocus = ({focusData, eventData}) => {
  return (
    <div className="dashboard-projects">
      <div className="container u-p-md u-mr-md">
        <section className="dashboard-projects__grid grid grid--half">
          <div className="grid-item">
            <div className="panel panel--fill panel--px-1-rad-def u-p-md">
              <div className="o-type-5">Focus areas</div>
              <FocusList data={focusData} />
            </div>
          </div>
          <div className="grid-item">
            <div className="panel panel--fill panel--px-1-rad-def u-p-md">
              <div className="o-type-5">Upcoming innovation events</div>
              <EventList data={eventData} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default function CurrentFocus({digital_bets, events, focus_areas}) {
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
          <OverviewPanel {...overviewPanelData({projects})} />
        </SidePanel>
      }
    >
      <DashboardCurrentFocus
        focusData={focus_areas.focus_areas}
        eventData={events.events}
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
    },
    revalidate: 1,
  };
};
