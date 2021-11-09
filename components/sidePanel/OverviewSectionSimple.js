import LabelCount from "../molecules/LabelCount";

const OverviewSectionSimple = ({data}) => {
  return (
    <div className="overview-panel__info">
      <h3 className="overview-panel__label o-type-5 u-weight-bold u-mb-sm">
        {data.label}
      </h3>
      <div className="overview-panel__content">
        <div className="o-grid">
          {data.counts.map((item, idx) => {
            return (
              <div
                key={idx + item.label}
                className={`o-grid__col u-1/${data.counts.length}`}
              >
                <LabelCount label={item.label} count={item.count} />
              </div>
            );
          })}
          <div className="o-grid__col u-1/1">
            <ul className="overview-panel__meta o-type-3 u-mt-md">
              {data.meta.map((item, idx) => {
                return (
                  <li
                    key={idx + item}
                    className="overview-panel__meta-item u-weight-medium"
                  >
                    {item.label}: {item.value}
                  </li>
                );
              })}
            </ul>
          </div>
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
