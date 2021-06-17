import LabelCount from "../molecules/LabelCount";

const OverviewSectionSimple = ({data}) => {
  return (
    <div className="overview-panel__info u-mb-2x">
      <h3 className="overview-panel__label o-type-4 u-color-text-accent u-weight-bold u-mb-sm">
        {data.label}
      </h3>
      <div className="overview-panel__content">
        <div className="o-grid">
          {data.numbers.map((item, idx) => {
            return (
              <div
                key={idx + item.label}
                className={`o-grid__col u-1/${data.numbers.length}`}
              >
                <LabelCount label={item.label} count={item.count} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

OverviewSectionSimple.defaultProps = {
  data: {
    label: "Title",
    numbers: [
      {label: "label", count: 3},
      {label: "label", count: 4},
    ],
  },
};

export default OverviewSectionSimple;
