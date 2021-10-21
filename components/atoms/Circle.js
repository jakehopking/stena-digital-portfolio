const Circle = ({radius, color, className, text, textColor, scale}) => {
  return (
    <svg
      className={`svg svg--circle ${className}`}
      style={{
        width: radius * 2,
        height: radius * 2,
        transform: `scale3d(${scale}, ${scale}, ${scale})`,
      }}
    >
      <circle cx={radius} cy={radius} r={radius} fill={`var(${color})`} />
      {text && (
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill={`var(${textColor})`}
          // stroke={`var(${textColor})`}
          dy=".3em"
          fontSize="0.85rem"
          fontWeight="var(--fw-4)"
        >
          {text}
        </text>
      )}
    </svg>
  );
};

Circle.defaultProps = {
  color: "--color-default-fg",
  textColor: "--color-default-bg",
  className: "",
  radius: 5,
  text: "",
};

export default Circle;
