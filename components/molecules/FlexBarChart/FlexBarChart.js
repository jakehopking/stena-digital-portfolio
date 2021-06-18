import FlexBarChartBar from "./FlexBarChartBar";
import {greatestValue} from "../../../utils/general";
import {colorMap} from "../../../data/data";

const FlexBarChart = ({data, height, colorMap, orientation}) => {
  const maxHeight = greatestValue(data.map((datum) => datum.value));
  return (
    <div
      className={`flex-bar-chart flex-bar-chart--${orientation}`}
      style={{height: height}}
    >
      {data.map((datum, index) => (
        <FlexBarChartBar
          key={datum.name + index}
          label={datum.label}
          value={datum.value}
          height={(datum.value / maxHeight) * 100}
          chartHeight={height}
          fill={colorMap[index]}
        />
      ))}
    </div>
  );
};

FlexBarChart.defaultProps = {
  colorMap: {...colorMap},
  orientation: "column",
};

export default FlexBarChart;
