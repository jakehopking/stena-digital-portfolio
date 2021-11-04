import {useEffect, useState, useContext} from "react";
import {NetlifyCMSContext} from "../../context/netlifyCmsContext";
import {getGroupedListByKey} from "../../utils/general";
import Circle from "../atoms/Circle";
import ProgressBar from "../atoms/ProgressBar";

const DigitalBetItem = ({
  bigBet,
  circleRadius,
  count,
  group,
  projectName,
  size,
  effort,
  type,
}) => {
  const [colors, setColors] = useState({
    Now: "--color-primary-0",
    Next: "--color-secondary-0",
    Future: "--color-tertiary-0",
  });
  const bigBetText = "Big Bet";
  const {digital_bets} = useContext(NetlifyCMSContext);
  const {products} = useContext(NetlifyCMSContext);
  const {ideas} = useContext(NetlifyCMSContext);

  const icon = null;

  const maxEffort = Math.max(
    ...Object.keys(getGroupedListByKey({array: digital_bets.projects, key: "effort"}))
  );

  const calcMaxEffort = (type) => {
    return Math.max(
      ...Object.keys(
        getGroupedListByKey({
          array: type === "products" ? products.products : ideas.ideas,
          key: "effort",
        })
      )
    );
  };

  const circleSizeScale = effort / calcMaxEffort(type);
  debugger;

  const BigBet = () =>
    bigBet && <div className="big-bet u-mr">{bigBet ? bigBetText : ""}</div>;

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
          icon={icon}
          radius={circleRadius}
          scale={effort ? circleSizeScale : 1}
        />
      </div>
      <div className="o-media__fluid digital-bet-item__content">
        <div className="digital-bet-item__main">
          <div className="digital-bet-item__label">{projectName}</div>
        </div>
        <div className="digital-bet-item__aside">
          <BigBet />
        </div>
      </div>
    </div>
  );
};

DigitalBetItem.defaultProps = {
  bigBet: false,
  productTeam: "Category",
  circleRadius: 13,
  count: null,
  group: "Group",
  projectName: "Project name",
  size: "small",
  phase: "Phase",
  type: "products",
};

export default DigitalBetItem;
