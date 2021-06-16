import Head from "next/head";
import Link from "next/link";
import {getDatabase} from "../lib/notion";
import {Text} from "./[id].js";
import {AppContext} from "../context/context";
import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewSectionSimple from "../components/sidePanel/OverviewSectionSimple";

export const databaseId = process.env.NOTION_DB_PORTFOLIO_TRACKER;

const overviewPanelData = {
  projects: {
    label: "Projects",
    numbers: [
      {label: "Explore", count: 7},
      {label: "Exploit", count: 2},
      {label: "Big Bets", count: 4},
    ],
  },
  team: {
    label: "Team members",
    numbers: [
      {label: "Project team", count: 8},
      {label: "Exploitation pod", count: 6},
    ],
  },
  investments: {
    label: "Investments",
    chartData: [{}],
  },
  roi: {
    label: "Return on investments",
    chartData: {},
  },
};

const OverviewPanel = ({projects, team, investments, roi}) => {
  return (
    <div className="overview-panel">
      {projects && <OverviewSectionSimple data={projects} />}
      {team && <OverviewSectionSimple data={team} />}
      {/* {investments && <p>Investments</p>}
      {roi && <p>ROI</p>} */}
      <div className="overview-panel__info u-mb-2x">
        <h3 className="overview-panel__label o-type-4 u-color-text-accent u-weight-bold u-mb-xs">
          Investments
        </h3>
        <div className="overview-panel__content">
          <div className="o-grid">
            <div className="o-grid__col u-1/2">1</div>
            <div className="o-grid__col u-1/2">2</div>
          </div>
        </div>
      </div>
      <div className="overview-panel__info u-mb-2x">
        <h3 className="overview-panel__label o-type-4 u-color-text-accent u-weight-bold u-mb-xs">
          Return on investments
        </h3>
        <div className="overview-panel__content"></div>
      </div>
    </div>
  );
};

export default function Home({posts}) {
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
      <p>
        Main children up up ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        id. Ut sunt odio, soluta pariatur eaque cum nam mollitia consectetur enim animi
        cumque. Recusandae, deserunt nulla. Distinctio nobis quidem blanditiis?
      </p>
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
