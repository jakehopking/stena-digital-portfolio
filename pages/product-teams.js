import Head from "next/head";
import Link from "next/link";
import {getDatabase} from "../lib/notion";
import {AppContext} from "../context/context";
import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import DigitalBetList from "../components/organisms/DigitalBetList";
import DashboardResponsiveCirclePacking from "../components/molecules/DashboardResponsiveCirclePacking";
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

const DashboardStage = ({rows, grid}) => {
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
            <DigitalBetList data={digitalBets} title="Now" />
          </div>
          <div className="o-grid__col u-1/3">
            <DigitalBetList data={digitalBets} title="Next" />
          </div>
          <div className="o-grid__col u-1/3">
            <DigitalBetList data={digitalBetsWithCounts} title="Future" size="small" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default function ProductTeams({posts}) {
  // debugger;

  return (
    <Layout
      home
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData} />
        </SidePanel>
      }
    >
      <DashboardStage rows />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
