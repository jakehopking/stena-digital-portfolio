import Head from "next/head";
import Link from "next/link";
import {getDatabase} from "../lib/notion";
import {AppContext} from "../context/context";
import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import {getColumnMultiSelectTags, getColumnSelectTags} from "../utils/notion";
import data from "../data/data";

export const databaseId = process.env.NOTION_DB_PORTFOLIO_TRACKER;

const {overviewPanelData} = data;

const DashboardStage = ({rows, grid}) => {
  return (
    <div
      className={`dashboard-stage ${
        rows ? "dashboard-stage--rows" : grid ? "dashboard-stage--grid" : ""
      }`}
    >
      <section className="dashboard-stage__chart"></section>
      <section className="dashboard-stage__info"></section>
    </div>
  );
};

export default function Home({bigBetTags, exploreExploitTags, investmentTags}) {
  // debugger;

  return (
    <Layout
      home
      sideCol={
        <SidePanel>
          <OverviewPanel
            {...overviewPanelData({exploreExploitTags, bigBetTags, investmentTags})}
          />
        </SidePanel>
      }
    >
      <DashboardStage grid />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  return {
    props: {
      notion: database,
      exploreExploitTags: getColumnSelectTags(database, "Explore / Exploit"),
      investmentTags: getColumnSelectTags(database, "Investment"),
      bigBetTags: getColumnMultiSelectTags(database, "Big bet"),
    },
    revalidate: 1,
  };
};
