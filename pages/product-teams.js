import Head from "next/head";
import Link from "next/link";
import {getDatabase} from "../lib/notion";
import {AppContext} from "../context/context";
import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import data from "../data/data";
import ProgressBar from "../components/atoms/ProgressBar";

export const databaseId = process.env.NOTION_DB_PORTFOLIO_TRACKER;

const {overviewPanelData, digitalBets} = data;

const DigitalBet = ({category, state, group, label, progress, bigBet}) => {
  // debugger;
  return (
    <div className="o-media o-media--quarter">
      <div className="o-media__fixed">
        {group}
        {bigBet ? "True" : "False"}
      </div>
      <div className="o-media__fluid">
        {category}
        {label}
        {state}
        <ProgressBar value={progress} />
      </div>
    </div>
  );
};

const DigitalBetList = ({data, title}) => {
  return (
    <div className="digital-bet-list">
      <div className="digital-bet-list__title">{title}</div>
      <div className="digital-bet-list__list">
        {data.map((bet, idx) => {
          return (
            <DigitalBet
              key={idx + bet.group}
              category={bet.category}
              state={bet.state}
              group={bet.group}
              label={bet.label}
              progress={bet.progress}
              bigBet={bet.bigBet}
            />
          );
        })}
      </div>
    </div>
  );
};

const DashboardStage = ({rows, grid}) => {
  return (
    <div
      className={`dashboard-stage ${
        rows ? "dashboard-stage--rows" : grid ? "dashboard-stage--grid" : ""
      }`}
    >
      <section className="dashboard-stage__chart"></section>
      <section className="dashboard-stage__info">
        <div className="o-grid">
          <div className="o-grid__col u-1/3">
            <DigitalBetList data={digitalBets} title="Now" />
          </div>
          <div className="o-grid__col u-1/3"></div>
          <div className="o-grid__col u-1/3"></div>
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
