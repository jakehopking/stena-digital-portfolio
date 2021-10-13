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
