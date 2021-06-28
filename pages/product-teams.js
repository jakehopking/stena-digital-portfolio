import Head from "next/head";
import Link from "next/link";
import {getDatabase} from "../lib/notion";
import {AppContext} from "../context/context";
import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DigitalBetList from "../components/organisms/DigitalBetList";
import DashboardResponsiveCirclePacking from "../components/molecules/DashboardResponsiveCirclePacking";
import {
  titleCount,
  getColumnMultiSelectTags,
  getColumnSelectTags,
  getSelectName,
  getDatabaseColumnTitles,
  filterByColName,
  getMappedListFromColumnTitleSelectTags,
} from "../utils/notion";
import {CHART_SCHEMES, CHART_THEME} from "../theme/theme";
import data from "../data/data";

export const databaseId = process.env.NOTION_DB_PORTFOLIO_TRACKER;

const {
  overviewPanelData,
  digitalBets,
  digitalBetsWithCounts,
  circlePackingOne,
  circlePackingTwo,
} = data;

const DashboardStage = ({rows, grid, digitalBetsList}) => {
  // debugger;
  return (
    <div
      className={`dashboard-stage ${
        rows ? "dashboard-stage--rows" : grid ? "dashboard-stage--grid" : ""
      }`}
    >
      <section className="dashboard-stage__chart">
        <div className="o-grid o-grid--fill">
          <div className="o-grid__col u-1/2">
            <DashboardResponsiveCirclePacking
              data={circlePackingOne}
              height={700}
              colorScheme={CHART_SCHEMES.one}
              theme={CHART_THEME}
            />
          </div>
          <div className="o-grid__col u-1/2">
            <DashboardResponsiveCirclePacking
              data={circlePackingTwo}
              height={700}
              colorScheme={CHART_SCHEMES.two}
              theme={CHART_THEME}
            />
          </div>
        </div>
      </section>
      <section className="dashboard-stage__info">
        <div className="o-grid">
          <div className="o-grid__col u-1/3">
            <DigitalBetList data={digitalBetsList.Now} title="Now" />
          </div>
          <div className="o-grid__col u-1/3">
            <DigitalBetList data={digitalBetsList.Next} title="Next" />
          </div>
          <div className="o-grid__col u-1/3">
            <DigitalBetList data={digitalBetsList.Future} title="Future" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default function ProductTeams({
  notion,
  entryTitleCount,
  journeyStageTags,
  exploreExploitTags,
  investmentTags,
  bigBetTags,
  statusTags,
  colNames,
  digitalBetsList,
  test,
}) {
  // debugger;

  // console.log(notion);
  // console.log(entryTitleCount);
  console.log({journeyStageTags});
  // console.log(exploreExploitTags);
  console.log({investmentTags});
  console.log({bigBetTags});
  console.log({statusTags});
  // console.log(colNames);
  // console.log(digitalBetsList);

  return (
    <Layout
      home
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData} />
        </SidePanel>
      }
    >
      <DashboardStage rows digitalBetsList={digitalBetsList} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  // Filter database by "status" column.
  // TODO: Compose this and getMappedListFromColumnSelectTags together.
  const statusList = filterByColName(database, "Status");

  return {
    props: {
      // notion: database,
      // entryTitleCount: titleCount(database),
      journeyStageTags: getColumnMultiSelectTags(database, "Journey stage relevance"),
      // exploreExploitTags: getColumnSelectTags(database, "Explore / Exploit"),
      investmentTags: getColumnSelectTags(database, "Investment"),
      bigBetTags: getColumnMultiSelectTags(database, "Big bet"),
      statusTags: getColumnSelectTags(database, "Status"),
      // colNames: getDatabaseColumnTitles(database),
      digitalBetsList: getMappedListFromColumnTitleSelectTags(statusList, "Status"),
      test: "",
    },
    revalidate: 1,
  };
};
