import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardStage from "../components/organisms/DashboardStage";
import data from "../data/data";
import {phaseTitlesExploit} from "../data/constants";
import {organiseListByKey} from "../utils/general";

export const databaseId = process.env.NOTION_DB_PORTFOLIO_TRACKER;

const {overviewPanelData, circlePackingOne, circlePackingTwo, cmsData} = data;

const DashboardProjects = ({}) => {
  return (
    <div className="dashboard-projects">
      <div className="container">
        <section className="dashboard-projects__title u-p">All projects</section>
        <section className="dashboard-projects__grid grid grid--250">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </section>
      </div>
    </div>
  );
};

export default function ProductTeams({cmsData}) {
  const {projects} = cmsData;

  // const exploreList = organiseListByKey({
  //   listArray: projects,
  //   filterList: phaseTitlesExploit,
  // });
  const exploitList = organiseListByKey({
    listArray: projects,
    categoryName: "exploit",
    filterList: phaseTitlesExploit,
  });

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
      <DashboardProjects />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      cmsData,
    },
    revalidate: 1,
  };
};
