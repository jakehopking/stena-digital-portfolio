import ideas from "../content/ideas.json";
import products from "../content/products.json";
import events from "../content/events.json";
import overviewPanel from "../content/overviewPanel.json";
import shortcutImage from "../content/shortcutImage.json";
import {circlePackingOne, circlePackingTwo, chartTheme} from "./chartData";
import {digitalBets, digitalBetsWithCounts} from "./digitalBets";
import {overviewPanelData} from "./overviewPanel";

export const cmsData = {
  ideas,
  products,
  events,
  overviewPanel,
  shortcutImage,
};

export const data = {
  overviewPanelData,
  digitalBets,
  digitalBetsWithCounts,
  circlePackingOne,
  circlePackingTwo,
  cmsData,
};

export default data;
