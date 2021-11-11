import {filterFn, multiplier} from "../utils/general";
import {overviewPanelTitleGroups} from "./constants";

export const overviewPanelData = ({
  products,
  ideas,
  overviewPanel,
  effortValueMultiplier = 1000000,
}) => {
  // Overview panel data from netlify
  const {
    progressData,
    recyclingTrends,
    transformationInvestments,
    overviewIdeas,
    overviewProducts,
  } = overviewPanel;

  // Ideas
  const ideaCounts = Object.entries(overviewPanelTitleGroups.ideas).map((group) => {
    return {
      label: group[0],
      count: ideas.filter((item) => filterFn(item.phase, group[1])).length,
    };
  });

  // Products
  const productCounts = Object.entries(overviewPanelTitleGroups.products).map((group) => {
    return {
      label: group[0],
      count: products.filter((item) => filterFn(item.phase, group[1])).length,
    };
  });

  return {
    ideas: {
      label: "Ideas",
      counts: ideaCounts,
      meta: [
        {label: "Response time on idea", value: `${overviewIdeas.responseTime} hours`},
        {label: "Average evaluation time", value: `${overviewIdeas.evaluationTime} days`},
      ],
    },
    products: {
      label: "Products",
      counts: productCounts,
      meta: [
        {label: "Lead time", value: `${overviewProducts.leadTime} weeks`},
        {label: "Number of learnings", value: `${overviewProducts.learnings}/y`},
      ],
    },
    innovation: {
      label: "Transformational investments",
      chartData: transformationInvestments,
    },
    howMuchWeDo: {
      label: "How much do we do?",
      subLabel: {
        label: "Innovation rate in total turnover",
        value: progressData.innovationRate,
      },
      progress: progressData.progressBars,
    },
    trends: {
      label: "Top recycling trends",
      trendData: recyclingTrends,
    },
    // No longer used
    // team: {
    //   label: "Team members",
    //   numbers: [
    //     {
    //       label: "Product team",
    //       count: teamProduct.length,
    //     },
    //     {
    //       label: "Exploration hub",
    //       count: teamExploration.length,
    //     },
    //   ],
    // },
    // No longer used
    // investments: {
    //   label: "Investments",
    //   chartData: [
    //     {
    //       label: "Explore",
    //       value: exploreList.reduce(
    //         (acc, curr) => acc + multiplier(curr.effort, effortValueMultiplier),
    //         0
    //       ),
    //     },
    //     {
    //       label: "Exploit",
    //       value: exploitList.reduce(
    //         (acc, curr) => acc + multiplier(curr.effort, effortValueMultiplier),
    //         0
    //       ),
    //     },
    //   ],
    // },
  };
};
