import Circle from "../atoms/Circle";

const OverviewSectionTrends = ({data}) => {
  return (
    <div className="overview-panel__info">
      <h3 className="overview-panel__label o-type-5 u-weight-bold u-mb-md">
        {data.label}
      </h3>
      <div className="overview-panel__content">
        <div className="o-grid">
          <div className={`o-grid__col`}>
            {data.trendData.map((item, idx) => {
              return (
                <div
                  className="trends-list u-ai-center u-flex u-mb-md"
                  key={idx + "overview-trend"}
                >
                  <Circle
                    text={idx + 1}
                    radius={15}
                    color="--color-primary-15"
                    className="trends-list__circle"
                  />
                  <div className="trends-list__label u-ml u-weight-bold">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

OverviewSectionTrends.defaultProps = {
  data: {
    label: "Title",
    trendData: ["one", "two", "three"],
  },
};

export default OverviewSectionTrends;
