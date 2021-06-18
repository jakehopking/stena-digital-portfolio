export const data = {
  overviewPanelData: {
    projects: {
      label: "Projects",
      numbers: [
        {label: "Explore", count: 7},
        {label: "Exploit", count: 2},
        {label: "Big Bets", count: 4},
      ],
    },
    team: {
      label: "Team members",
      numbers: [
        {label: "Project team", count: 8},
        {label: "Exploitation pod", count: 6},
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
  },
  digitalBets: [
    {
      bigBet: true,
      category: "Product team",
      group: "Now",
      label: "Sales of consumables",
      progress: 75,
      state: "Launch",
    },
    {
      bigBet: false,
      category: "Exploration pod",
      group: "Next",
      label: "Waste quote tool",
      progress: 25,
      state: "Discovery",
    },
    {
      bigBet: true,
      category: "Exploration pod",
      group: "Future",
      label: "Material Lab",
      progress: 50,
      state: "Investment",
    },
  ],
  digitalBetsWithCounts: [
    {
      bigBet: true,
      category: "Product team",
      count: 2,
      group: "Now",
      label: "Sales of consumables",
      progress: 75,
      state: "Launch",
    },
    {
      bigBet: false,
      category: "Exploration pod",
      count: 4,
      group: "Next",
      label: "Waste quote tool",
      progress: 25,
      state: "Discovery",
    },
    {
      bigBet: true,
      category: "Exploration pod",
      count: 6,
      group: "Future",
      label: "Material Lab",
      progress: 50,
      state: "Investment",
    },
  ],
};

export const colorMap = {
  0: "--color-primary-0",
  1: "--color-tertiary-0",
  3: "--color-secondary-0",
};

export default data;
