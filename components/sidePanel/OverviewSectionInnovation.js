const OverviewSectionInnovation = ({data, chartHeight, chartWidth}) => {
  return (
    <div className="overview-panel__info u-mb-2x">
      <h3 className="overview-panel__label o-type-5 u-weight-bold u-mb-sm">
        {data.label}
      </h3>
      <div className="overview-panel__content">
        <div className="o-grid o-grid--center">
          <div className={`o-grid__col`}></div>
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
