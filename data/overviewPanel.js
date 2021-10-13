import {filterFn, multiplier} from "../utils/general";
import {phaseTitlesExploit} from "./constants";

export const overviewPanelData = ({projects, effortValueMultiplier = 1000000}) => {
  return {
    projects: {
      label: "Projects",
      numbers: [
        {
          label: "Explore",
          count: projects.filter((item) =>
            filterFn(item.phase, phaseTitlesExploit, "exclude")
          ).length,
        },
        {
          label: "Exploit",
          count: projects.filter((item) => filterFn(item.phase, phaseTitlesExploit))
            .length,
        },
        {label: "Total this year", count: projects.length},
      ],
    },
    team: {
      label: "Team members",
      numbers: [
        {
          label: "Product team",
          count: projects.filter((item) => item.product_team === "Product").length,
        },
        {
          label: "Exploration hub",
          count: projects.filter((item) => item.product_team === "Exploration hub")
            .length,
        },
      ],
    },
    investments: {
      label: "Investments",
      chartData: [
        {
          label: "Explore",
          value: projects
            .filter((item) => filterFn(item.phase, phaseTitlesExploit, "exclude"))
            .reduce(
              (acc, curr) => acc + multiplier(curr.effort, effortValueMultiplier),
              0
            ),
        },
        {
          label: "Exploit",
          value: projects
            .filter((item) => filterFn(item.phase, phaseTitlesExploit))
            .reduce(
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
