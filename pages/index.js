import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DashboardStage from "../components/organisms/DashboardStage";
import data from "../data/data";
import {phaseTitlesExploit} from "../data/constants";
import {getGroupedListByKey, filterFn, organiseListByKey} from "../utils/general";

export const databaseId = process.env.NOTION_DB_PORTFOLIO_TRACKER;

const {overviewPanelData, circlePackingOne, circlePackingTwo, cmsData} = data;

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

  const maxEffort = Math.max(
    ...Object.keys(getGroupedListByKey({array: projects, key: "effort"}))
  );

  const digitalBetCircleSize = projects.map((item) => {
    return {
      size: Math.floor((item.effort / maxEffort) * 100),
    };
  });

  console.log(digitalBetCircleSize);
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
    ></Layout>
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
