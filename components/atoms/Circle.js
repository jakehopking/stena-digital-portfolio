const Circle = ({
  color,
  className,
  icon,
  iconClassName,
  iconColor,
  iconOffset,
  iconSize,
  radius,
  scale,
  text,
  textColor,
}) => {
  const Icon = icon;
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
      {icon && (
        <Icon
          color={`var(${iconColor})`}
          className={iconClassName}
          x={iconOffset.x}
          y={iconOffset.y}
          size={iconSize}
        />
      )}
    </svg>
  );
};

Circle.defaultProps = {
  className: "",
  color: "--color-default-fg",
  iconClassName: "",
  iconColor: "--color-default-bg",
  iconOffset: {x: 3, y: 3},
  iconSize: "1.25em",
  radius: 5,
  text: "",
  textColor: "--color-default-bg",
};

export default Circle;
