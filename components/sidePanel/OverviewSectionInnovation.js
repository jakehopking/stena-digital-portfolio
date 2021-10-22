import {ResponsivePie} from "@nivo/pie";
import {schemeType} from "../../utils/general";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
const MyResponsivePie = ({data, colorScheme, theme}) => (
  <ResponsivePie
    data={data}
    margin={{top: 10, right: 0, bottom: 30, left: 0}}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    colors={schemeType(colorScheme)}
    theme={theme}
    borderWidth={1}
    borderColor={{from: "color", modifiers: [["darker", 0.2]]}}
    arcLinkLabelsSkipAngle={200}
    arcLinkLabelsTextColor="#ffffff"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{from: "color"}}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{from: "color", modifiers: [["darker", 2]]}}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 30,
        itemWidth: 70,
        itemHeight: 10,
        itemsSpacing: 0,
        symbolSize: 10,
        itemDirection: "left-to-right",
      },
    ]}
  />
);

const OverviewSectionInnovation = ({
  data,
  chartHeight,
  chartWidth,
  colorScheme,
  theme,
}) => {
  return (
    <div className="overview-panel__info u-mb-2x">
      <h3 className="overview-panel__label o-type-5 u-weight-bold u-mb-sm">
        {data.label}
      </h3>
      <div className="overview-panel__content">
        <div className="o-grid o-grid--center">
          <div
            className="o-grid__col innovation-chart"
            style={{width: "100%", height: "250px"}}
          >
            <MyResponsivePie
              data={data.chartData}
              colorScheme={colorScheme}
              theme={theme}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

OverviewSectionInnovation.defaultProps = {
  data: {
    label: "Title",
    chartData: [
      {label: "Label", value: 300000},
      {label: "Label", value: 400000},
      {label: "Label", value: 600000},
    ],
  },
  chartHeight: 200,
  chartWidth: "",
};

export default OverviewSectionInnovation;
