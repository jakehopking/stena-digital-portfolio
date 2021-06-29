const ProgressBar = ({total, value, size, trackColor, barColor}) => {
  const progressCalc = (value / total) * 100;

  return (
    <div
      className={`progress-bar ${size ? "progress-bar--" + size : ""}`}
      style={{backgroundColor: `var(${trackColor})`}}
    >
      <div
        className="progress-bar__bar"
        title={`Progress is ${progressCalc}%`}
        style={{width: `${progressCalc}%`, backgroundColor: `var(${barColor})`}}
      ></div>
    </div>
  );
};

ProgressBar.defaultProps = {
  total: 100,
  value: 50,
  size: "small",
  trackColor: "--color-default-bg",
  barColor: "--color-default-fg",
};

export default ProgressBar;
