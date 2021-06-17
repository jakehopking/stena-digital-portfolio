const Circle = ({radius, color, className}) => {
  return (
    <svg
      className={`svg svg--circle ${className}`}
      style={{width: radius * 2, height: radius * 2}}
    >
      <circle cx={radius} cy={radius} r={radius} fill={`var(${color})`} />
    </svg>
  );
};

Circle.defaultProps = {
  color: "--color-default-fg",
  className: "u-mb",
  radius: 5,
};

export default Circle;
