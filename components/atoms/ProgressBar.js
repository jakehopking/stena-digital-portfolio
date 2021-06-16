const ProgressBar = ({total, value, size, trackColor, color}) => {
  const progressCalc = (value / total) * 100;

  return (
    <div className={`progress-bar ${size ? "progress-bar--" + size : ""}`}>
      <div
        className="progress-bar__bar"
        title={`Progress is ${progressCalc}%`}
        style={{width: `${progressCalc}%`}}
      ></div>
    </div>
  );
};

ProgressBar.defaultProps = {
  total: 100,
  value: 50,
  size: "small",
};

export default ProgressBar;
