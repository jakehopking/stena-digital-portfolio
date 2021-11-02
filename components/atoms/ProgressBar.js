const ProgressBar = ({
  total,
  value,
  size,
  trackColor,
  barColor,
  label,
  className,
  showValue,
  valueSymbol,
}) => {
  const progressCalc = (value / total) * 100;

  return (
    <div className={`${showValue ? "progress-bar-container" : ""} ${className}`}>
      {label && <div className="progress-bar__label">{label}</div>}
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
      {showValue && (
        <div className="progress-bar__value">
          {value}
          {valueSymbol}
        </div>
      )}
    </div>
  );
};

ProgressBar.defaultProps = {
  total: 100,
  value: 50,
  size: "small",
  trackColor: "--color-default-bg",
  barColor: "--color-default-fg",
  label: "",
  className: "",
  showValue: false,
  valueSymbol: "%",
};

export default ProgressBar;
