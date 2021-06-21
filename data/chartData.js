import {COLOUR, GREY} from "../theme/theme";

export const chartTheme = {
  background: "transparent",
  textColor: GREY._00,
  labelTextColor: GREY._00,
  fontSize: 12,
  // axis: {
  //   domain: {
  //     line: {
  //       stroke: "#777777",
  //       strokeWidth: 1,
  //     },
  //   },
  //   ticks: {
  //     line: {
  //       stroke: "#777777",
  //       strokeWidth: 1,
  //     },
  //   },
  // },
  // grid: {
  //   line: {
  //     stroke: "#dddddd",
  //     strokeWidth: 1,
  //   },
  // },
};

export const circlePackingOne = {
  name: "Now/Next",
  children: [
    {
      name: "Pick up internal tracking",
      loc: 15000,
      detail: "If details key, then display that here.",
    },
    {
      name: "Pick up driver’s app",
      loc: 15000,
    },
    {
      name: "Waste quote tool",
      loc: 15000,
    },
    {
      name: "Material lab",
      loc: 15000,
    },
    {
      name: "Self-service for all customers",
      children: [
        {
          name: "Sales of consumables",
          loc: 40000,
        },
        {
          name: "Individual service sales/rentals",
          loc: 40000,
        },
        {
          name: "Sales of service bundles",
          loc: 40000,
        },
      ],
    },
  ],
};

export const circlePackingTwo = {
  name: "Future",
  children: [
    {
      name: "Evolve by Stena",
      loc: 15000,
    },
    {
      name: "Consultancy for circular economy",
      children: [
        {
          name: "Circular calculator",
          loc: 40000,
        },
        {
          name: "Recyclability calculator",
          loc: 40000,
        },
      ],
    },
  ],
};
