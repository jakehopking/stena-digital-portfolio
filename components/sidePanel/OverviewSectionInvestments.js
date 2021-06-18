import FlexBarChart from "../molecules/FlexBarChart/FlexBarChart";

const OverviewSectionInvestments = ({data, chartHeight, chartWidth}) => {
  const hasWidth = Boolean(chartWidth);
  const widthStyle = hasWidth ? {width: `${chartWidth}px`} : null;

  return (
    <div className="overview-panel__info u-mb-2x">
      <h3 className="overview-panel__label o-type-4 u-color-text-accent u-weight-bold u-mb-sm">
        {data.label}
      </h3>
      <div className="overview-panel__content">
        <div className="o-grid o-grid--center">
          <div className={`o-grid__col ${!hasWidth ? "u-3/4" : ""}`} style={widthStyle}>
            <FlexBarChart data={data.chartData} height={chartHeight} />
          </div>
        </div>
      </div>
    </div>
  );
};

OverviewSectionInvestments.defaultProps = {
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

export default OverviewSectionInvestments;
