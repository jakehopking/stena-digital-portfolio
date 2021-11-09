import {useState, useRef} from "react";
import Layout, {siteTitle} from "../components/Layout";
import SidePanel from "../components/sidePanel/SidePanel";
import OverviewPanel from "../components/sidePanel/OverviewPanel";
import Modal from "../components/molecules/Modal";
import data from "../data/data";
import {phaseTitlesExploit} from "../data/constants";
import {organiseListByKey} from "../utils/general";

const {overviewPanelData, cmsData} = data;
const {ideas, products, overviewPanel, shortcutImage} = cmsData;

const DashboardScreensaver = ({shortcutImage}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="dashboard dashboard--screensaver">
      <div className="container">
        <section className="dashboard__title">All projects</section>
        <section className="dashboard__grid grid grid--250 grid--alt-cols">
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
              <img src={shortcutImage} />
            </Modal>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </section>
      </div>
    </div>
  );
};

export default function Screensaver({ideas, products, shortcutImage}) {
  const {shortcut_image} = shortcutImage;

  return (
    <Layout
      home
      sideCol={
        <SidePanel>
          <OverviewPanel {...overviewPanelData({ideas, products, overviewPanel})} />
        </SidePanel>
      }
    >
      <DashboardScreensaver shortcutImage={shortcut_image} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      ...{
        ideas: ideas.ideas,
        products: products.products,
      },
      overviewPanel,
      shortcutImage,
    },
  };
};
