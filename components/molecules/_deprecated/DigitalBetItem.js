import {useEffect, useState, useContext} from "react";
import {NetlifyCMSContext} from "../../../context/netlifyCmsContext";
import {getGroupedListByKey} from "../../../utils/general";
import Circle from "../../atoms/Circle";
import ProgressBar from "../../atoms/ProgressBar";

const DigitalBetItem = ({
  bigBet,
  productTeam,
  count,
  group,
  projectName,
  progress,
  size,
  effort,
  phase,
  stakeholder,
}) => {
  const [colors, setColors] = useState({});
  const isSmall = Boolean(size === "small");
  const bigBetText = "Big Bet";
  const {digital_bets} = useContext(NetlifyCMSContext);

  const maxEffort = Math.max(
    ...Object.keys(getGroupedListByKey({array: digital_bets.projects, key: "effort"}))
  );

  const circleSizeScale = effort / maxEffort;
  // debugger;

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
        <Circle
          color={colors[group]}
          text={count}
          radius={isSmall ? 13 : 5}
          scale={effort && isSmall ? circleSizeScale : 1}
        />
        {!isSmall && <BigBet />}
      </div>
      <div className="o-media__fluid digital-bet-item__content">
        <div className="digital-bet-item__main">
          {!isSmall && <div className="digital-bet-item__category">{productTeam}</div>}
          <div className="digital-bet-item__label">{projectName}</div>
          {!isSmall && progress && (
            <ProgressBar value={progress} className="digital-bet-item__progress" />
          )}
        </div>
        <div className="digital-bet-item__aside">
          {/* {isSmall && <BigBet />} */}
          {!isSmall && phase && <div className="digital-bet-item__stage">{phase}</div>}
          {!isSmall && stakeholder && (
            <div className="digital-bet-item__stakeholder u-mt">{stakeholder}</div>
          )}
        </div>
      </div>
    </div>
  );
};

DigitalBetItem.defaultProps = {
  bigBet: false,
  productTeam: "Category",
  count: null,
  group: "Group",
  projectName: "Project name",
  progress: null,
  size: "",
  phase: "Phase",
  stakeholder: "Jacob Wilson",
};

export default DigitalBetItem;
