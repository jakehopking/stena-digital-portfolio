import {useState, useRef} from "react";
import Image from "next/image";
import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import Modal from "../components/molecules/Modal";
import data from "../data/data";
import {phaseTitlesExploit} from "../data/constants";
import {organiseListByKey} from "../utils/general";

const {overviewPanelData, cmsData} = data;
const {digital_bets, overviewPanel, shortcutImage} = cmsData;

const DashboardPortfolio = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const mainRef = useRef("#__main");
  const {shortcut_image} = shortcutImage;

  return (
    <div className="dashboard dashboard--portfolio">
      <div className="container">
        <section className="dashboard__title u-p">All projects</section>
        <section className="dashboard__grid grid grid--250">
          <div className="grid-item">
            <button
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Shortcut Image
            </button>
            <Modal
              onClose={() => {
                setModalOpen(false);
              }}
              open={modalOpen}
              size="fill"
            >
              <img src={shortcut_image} />
            </Modal>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </section>
      </div>
    </div>
  );
};

export default function ProductTeams({digital_bets}) {
  const {projects} = digital_bets;

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
          <OverviewPanel {...overviewPanelData({projects, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardPortfolio />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      digital_bets,
      overviewPanel,
    },
    revalidate: 1,
  };
};
