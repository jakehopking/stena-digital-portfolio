import {ResponsiveCirclePacking} from "@nivo/circle-packing";
import styled from "styled-components";

const ChartToolTip = styled.div`
  &::before {
    background-color: ${(props) => props.color};
  }
`;

const DashboardResponsiveCirclePacking = ({data, height, theme, colorScheme}) => (
  <ResponsiveCirclePacking
    data={data}
    margin={{top: 20, right: 20, bottom: 20, left: 20}}
    id="name"
    value="loc"
    colors={{scheme: colorScheme}}
    // colorBy="id"
    theme={theme}
    height={height}
    childColor={{from: "color", modifiers: [["brighter", 0.4]]}}
    padding={4}
    enableLabels={true}
    labelsFilter={function (e) {
      return 1 === e.node.depth;
    }}
    labelsSkipRadius={10}
    labelTextColor={{from: "color", modifiers: [["darker", 4]]}}
    borderWidth={1}
    borderColor={{from: "color", modifiers: [["darker", 0.5]]}}
    tooltip={({id, value, color, data}) => (
      <ChartToolTip className="chart-tooltip" color={color}>
        {id}: {value}
        {data.detail ? <div className="chart-tooltip__detail">{data.detail}</div> : ""}
      </ChartToolTip>
    )}
    // defs={[
    //   {
    //     id: "lines",
    //     type: "patternLines",
    //     background: "none",
    //     color: "inherit",
    //     rotation: -45,
    //     lineWidth: 5,
    //     spacing: 8,
    //   },
    // ]}
    fill={[{match: {depth: 1}, id: "lines"}]}
  />
);

DashboardResponsiveCirclePacking.defaultProps = {
  height: 700,
  theme: "",
  colorScheme: "nivo",
};

export default DashboardResponsiveCirclePacking;
