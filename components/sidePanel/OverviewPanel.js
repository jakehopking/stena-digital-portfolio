import {greatestValue} from "../../utils/general";
import OverviewSectionSimple from "./OverviewSectionSimple";

const data = [
  {
    name: "Horten",
    lessonsWatched: 200,
  },
  {
    name: "Kirsten",
    lessonsWatched: 136,
  },
];

const ChartViewBox = ({children, height, width}) => (
  <svg viewBox={`0 0 ${width} ${height}`} height={height} width={width}>
    {children}
  </svg>
);

const Bar = ({fill, x, y, height, width}) => (
  <g className="test">
    <rect fill={fill} x={x} y={y} height={height} width={width} rx="20" />
  </g>
);
Bar.defaultProps = {
  fill: "var(--color-default-fg",
};

const BarChart = ({data}) => {
  const barWidth = 70;
  const barMargin = 20;
  const width = data.length * (barWidth + barMargin);
  const height = greatestValue(data.map((datum) => datum.lessonsWatched));

  return (
    <ChartViewBox height={height} width={width}>
      {data.map((datum, index) => (
        <Bar
          key={datum.name}
          x={index * (barWidth + barMargin)}
          y={height - datum.lessonsWatched}
          width={barWidth}
          height={datum.lessonsWatched}
        />
      ))}
    </ChartViewBox>
  );
};

const OverviewPanel = ({projects, team, investments, roi}) => {
  return (
    <div className="overview-panel">
      {projects && <OverviewSectionSimple data={projects} />}
      {team && <OverviewSectionSimple data={team} />}
      {/* {investments && <p>Investments</p>}
      {roi && <p>ROI</p>} */}
      <div className="overview-panel__info u-mb-2x">
        <h3 className="overview-panel__label o-type-4 u-color-text-accent u-weight-bold u-mb-xs">
          Investments
        </h3>
        <div className="overview-panel__content">
          <div className="o-grid">
            <div className="o-grid__col">
              <BarChart data={data} />
            </div>
          </div>
        </div>
      </div>
      <div className="overview-panel__info u-mb-2x">
        <h3 className="overview-panel__label o-type-4 u-color-text-accent u-weight-bold u-mb-xs">
          Return on investments
        </h3>
        <div className="overview-panel__content"></div>
      </div>
    </div>
  );
};

export default OverviewPanel;
