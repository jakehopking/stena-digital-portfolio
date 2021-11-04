import digital_bets from "../content/digital_bets.json"; // remove
import focus_areas from "../content/focus_areas.json"; // remove
import ideas from "../content/ideas.json";
import products from "../content/products.json";
import events from "../content/events.json";
import overviewPanel from "../content/overviewPanel.json";
import shortcutImage from "../content/shortcutImage.json";
import {circlePackingOne, circlePackingTwo, chartTheme} from "./chartData";
import {digitalBets, digitalBetsWithCounts} from "./digitalBets";
import {overviewPanelData} from "./overviewPanel";

export const cmsData = {
  digital_bets, // remove
  focus_areas, // remove
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
