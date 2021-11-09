import ideas from "../content/ideas.json";
import products from "../content/products.json";
import events from "../content/events.json";
import currentFocus from "../content/currentFocus.json";
import overviewPanel from "../content/overviewPanel.json";
import shortcutImage from "../content/shortcutImage.json";
import {digitalBets, digitalBetsWithCounts} from "./digitalBets";
import {overviewPanelData} from "./overviewPanel";

export const cmsData = {
  ideas,
  products,
  events,
  currentFocus,
  overviewPanel,
  shortcutImage,
};

export const data = {
  overviewPanelData,
  digitalBets,
  digitalBetsWithCounts,
  cmsData,
};

export default data;
