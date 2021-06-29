import {getTotalCountFromTags, filterDirtyTagKeys} from "../utils/notion";

export const overviewPanelData = ({exploreExploitTags, bigBetTags, investmentTags}) => {
  return {
    projects: {
      label: "Projects",
      numbers: [
        {
          label: "Explore",
          count: getTotalCountFromTags(filterDirtyTagKeys(exploreExploitTags, "Explore")),
        },
        {
          label: "Exploit",
          count: getTotalCountFromTags(filterDirtyTagKeys(exploreExploitTags, "Exploit")),
        },
        {label: "Big Bets", count: getTotalCountFromTags(bigBetTags)},
      ],
    },
    team: {
      label: "Team members",
      numbers: [
        {
          label: "Product team",
          count: getTotalCountFromTags(filterDirtyTagKeys(investmentTags, "Product")),
        },
        {
          label: "Exploration pod",
          count: getTotalCountFromTags(filterDirtyTagKeys(investmentTags, "Exploration")),
        },
      ],
    },
    investments: {
      label: "Investments",
      chartData: [
        {label: "Explore", value: 5100000},
        {label: "Exploit", value: 2550000},
      ],
    },
    roi: {
      label: "Return on investments",
      chartData: {},
    },
  };
};
