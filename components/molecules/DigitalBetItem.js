import {useEffect, useState} from "react";
import Circle from "../atoms/Circle";
import ProgressBar from "../atoms/ProgressBar";

const DigitalBetItem = ({
  bigBet,
  category,
  count,
  group,
  label,
  progress,
  size,
  stage,
}) => {
  // debugger;
  const [colors, setColors] = useState({});
  const isSmall = Boolean(size === "small");
  const bigBetText = "Big Bet";

  const BigBet = () =>
    bigBet && (
      <div className={`big-bet ${isSmall ? "u-mr" : "u-mt"}`}>
        {bigBet ? bigBetText : ""}
      </div>
    );

  // Actually useEffect here is unnecessary. Was using getVar() prior, and hence referenced the window.
  useEffect(() => {
    setColors({
      Now: "--color-primary-0",
      Next: "--color-secondary-0",
      Future: "--color-tertiary-0",
    });
    return () => {};
  }, []);

  return (
    <div
      className={`o-media o-media--quarter digital-bet-item ${
        size ? "digital-bet-item--" + size : ""
      }`}
    >
      <div className="o-media__fixed digital-bet-item__icons">
        <Circle color={colors[group]} text={count} radius={isSmall ? 13 : 5} />
        {!isSmall && <BigBet />}
      </div>
      <div className="o-media__fluid digital-bet-item__content">
        <div className="digital-bet-item__main">
          {!isSmall && <div className="digital-bet-item__category">{category}</div>}
          <div className="digital-bet-item__label">{label}</div>
          {!isSmall && (
            <ProgressBar value={progress} className="digital-bet-item__progress" />
          )}
        </div>
        <div className="digital-bet-item__aside">
          {isSmall && <BigBet />}
          {isSmall ? <div className="digital-bet-item__stage">{stage}</div> : stage}
        </div>
      </div>
    </div>
  );
};

DigitalBetItem.defaultProps = {
  bigBet: false,
  category: "Category",
  count: null,
  group: "Group",
  label: "Label",
  progress: 50,
  size: "",
  state: "State",
};

export default DigitalBetItem;
