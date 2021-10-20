import ProgressBar from "../atoms/ProgressBar";

const OverviewSectionHowMuchWeDo = ({data}) => {
  return (
    <div className="overview-panel__info u-mb-2x">
      <h3 className="overview-panel__label o-type-5 u-weight-bold u-mb-xs">
        {data.label}
      </h3>
      <h4 className="overview-panel__subLabel o-type-4 u-mb-sm u-mt-z">
        {data.subLabel.label}: <strong>{data.subLabel.value}%</strong>
      </h4>
      <div className="overview-panel__content">
        <div className="o-grid">
          <div className={`o-grid__col`}>
            {data.progress.map((item) => {
              return (
                <ProgressBar
                  label={item.label}
                  value={item.value}
                  size="large"
                  barColor="--color-primary-15"
                  trackColor="--color-grey-06"
                  showValue
                  className="u-mv"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

OverviewSectionHowMuchWeDo.defaultProps = {
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

export default OverviewSectionHowMuchWeDo;
