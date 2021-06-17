import {useEffect, useState} from "react";
import Circle from "../atoms/Circle";
import ProgressBar from "../atoms/ProgressBar";

const bigBetText = "Big Bet";

const DigitalBetItem = ({category, state, group, label, progress, bigBet, size}) => {
  const [colors, setColors] = useState({});

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
        <Circle color={colors[group]} />
        <div className="big-bet">{bigBet ? bigBetText : ""}</div>
      </div>
      <div className="o-media__fluid digital-bet-item__content">
        <div className="digital-bet-item__main">
          <div className="digital-bet-item__category">{category}</div>
          <div className="digital-bet-item__label">{label}</div>
          <ProgressBar value={progress} className="digital-bet-item__progress" />
        </div>
        <div className="digital-bet-item__aside">{state}</div>
      </div>
    </div>
  );
};

DigitalBetItem.defaultProps = {
  category: "Category",
  state: "State",
  group: "Group",
  label: "Label",
  progress: 50,
  bigBet: false,
  size: "",
};

export default DigitalBetItem;
