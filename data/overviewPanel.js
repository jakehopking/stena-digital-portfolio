import {filterFn, multiplier} from "../utils/general";
import {phaseTitlesExploit} from "./constants";

export const overviewPanelData = ({projects, effortValueMultiplier = 1000000}) => {
  // Filter projects list, 'excluding' exploit entries
  const exploreList = projects.filter((item) =>
    filterFn(item.phase, phaseTitlesExploit, "exclude")
  );
  // Filter projects list for exploit entries
  const exploitList = projects.filter((item) => filterFn(item.phase, phaseTitlesExploit));

  // Filter by teams
  const teamProduct = projects.filter((item) => item.product_team === "Product");
  const teamExploration = projects.filter(
    (item) => item.product_team === "Exploration hub"
  );

  return {
    projects: {
      label: "Projects",
      numbers: [
        {
          label: "Explore",
          count: exploreList.length,
        },
        {
          label: "Exploit",
          count: exploitList.length,
        },
        {label: "Total this year", count: projects.length},
      ],
    },
    innovation: {
      label: "Innovation investments",
      chartData: [
        {label: "one", value: 30},
        {label: "two", value: 30},
        {label: "three", value: 15},
        {label: "four", value: 25},
      ],
    },
    howMuchWeDo: {
      label: "How much do we do?",
      subLabel: {
        label: "Innovation rate in total turnover",
        value: 10,
      },
      progress: [
        {
          label: "Behaviour change progress",
          value: 25,
        },
        {
          label: "Values and attitudes progress",
          value: 10,
        },
        {
          label: "Culture change progress",
          value: 33,
        },
      ],
    },
    trends: {
      label: "Top recycling trends",
      trendData: [
        "Refillable parent packaging",
        "Bulk dispenser refilling",
        "Returnable/reusable packaging",
      ],
    },
    team: {
      label: "Team members",
      numbers: [
        {
          label: "Product team",
          count: teamProduct.length,
        },
        {
          label: "Exploration hub",
          count: teamExploration.length,
        },
      ],
    },
    investments: {
      label: "Investments",
      chartData: [
        {
          label: "Explore",
          value: exploreList.reduce(
            (acc, curr) => acc + multiplier(curr.effort, effortValueMultiplier),
            0
          ),
        },
        {
          label: "Exploit",
          value: exploitList.reduce(
            (acc, curr) => acc + multiplier(curr.effort, effortValueMultiplier),
            0
          ),
        },
      ],
    },
    roi: {
      label: "Return on investments",
      chartData: {},
    },
  };
};
