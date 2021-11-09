import ProgressBar from "../atoms/ProgressBar";

const OverviewSectionHowMuchWeDo = ({data}) => {
  return (
    <div className="overview-panel__info">
      <h3 className="overview-panel__label o-type-5 u-weight-bold u-mb-xs">
        {data.label}
      </h3>
      <h4 className="overview-panel__subLabel o-type-4 u-mb-sm u-mt-z">
        {data.subLabel.label}: <strong>{data.subLabel.value}%</strong>
      </h4>
      <div className="overview-panel__content">
        <div className="o-grid">
          <div className={`o-grid__col`}>
            {data.progress.map((item, idx) => {
              return (
                <ProgressBar
                  label={item.label}
                  value={item.value}
                  size="large"
                  barColor="--color-primary-15"
                  trackColor="--color-grey-06"
                  showValue
                  className="u-mv"
                  key={idx + "-" + item.label}
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
    subLabel: {
      label: "Sub label",
      value: 10,
    },
    progress: [
      {label: "Label", value: 44},
      {label: "Label", value: 22},
      {label: "Label", value: 80},
    ],
  },
};

export default OverviewSectionHowMuchWeDo;
