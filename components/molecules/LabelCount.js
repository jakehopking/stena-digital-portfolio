const LabelCount = ({label, count}) => {
  return (
    <div className="label-count">
      <div className="label-count__label u-uppercase o-type-2 u-weight-medium">
        {label}
      </div>
      <div className="label-count__count h2">{count}</div>
    </div>
  );
};

export default LabelCount;

LabelCount.defaultProps = {
  label: "Label",
  count: 0,
};
