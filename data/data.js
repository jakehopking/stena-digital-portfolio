import digital_bets from "../content/digital_bets.json";
import focus_areas from "../content/focus_areas.json";
import events from "../content/events.json";
import overviewPanel from "../content/overviewPanel.json";
import shortcutImage from "../content/shortcutImage.json";
import {circlePackingOne, circlePackingTwo, chartTheme} from "./chartData";
import {digitalBets, digitalBetsWithCounts} from "./digitalBets";
import {overviewPanelData} from "./overviewPanel";

export const cmsData = {
  digital_bets,
  events,
  focus_areas,
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
