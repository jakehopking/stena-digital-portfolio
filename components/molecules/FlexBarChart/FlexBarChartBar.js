import millify from "millify";

const FlexBarChartBar = ({fill, color, height, label, value}) => {
  const barStyling = {
    flexBasis: `${height !== 100 ? `calc(${height}% - 30px)` : `${height}%`}`,
    backgroundColor: `var(${fill})`,
  };
  const labelColor = {
    color: `var(${color})`,
  };
  return (
    <div className="flex-bar-chart__item">
      <div className="flex-bar-chart__value" style={labelColor}>
        {millify(value)}
      </div>
      <div className="flex-bar-chart__bar" style={barStyling}></div>
      <div className="flex-bar-chart__label" style={labelColor}>
        {label}
      </div>
    </div>
  );
};

FlexBarChartBar.defaultProps = {
  fill: "--color-default-fg",
  color: "--color-default-fg",
};

export default FlexBarChartBar;
