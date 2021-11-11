import {useContext} from "react";
import {IoPause, IoClose} from "react-icons/io5";
import {NetlifyCMSContext} from "../../context/netlifyCmsContext";
import {getGroupedListByKey, formatDateSimple} from "../../utils/general";
import Circle from "../atoms/Circle";

const DigitalBetItem = ({
  bigBet,
  circleRadius,
  dateResume,
  effort,
  feature,
  phase,
  title,
  size,
  status,
  type,
}) => {
  const {ideas, products} = useContext(NetlifyCMSContext);
  const bigBetText = "Big Bet";
  const featureText = "Feature";
  const formattedDate = dateResume ? formatDateSimple(new Date(dateResume), 2) : null;

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

  const calcCircleColor = () =>
    phase === "New ideas"
      ? "--color-grey-09"
      : type === "products"
      ? "--color-primary-0"
      : "--color-secondary-0";

  const StatusIcon = () => {
    let Icon = null;
    if (status !== "Ongoing") {
      status === "Paused" ? (Icon = IoPause) : (Icon = IoClose);
    }
    return Icon;
  };

  const circleSizeScale = effort / calcMaxEffort(type);

  const BigBet = () =>
    bigBet && <div className="big-bet">{bigBet ? bigBetText : ""}</div>;

  // debugger;
  return (
    <>
      <div
        className={`
          o-media o-media--quarter digital-bet-item
          ${size ? "digital-bet-item--" + size : ""}
          ${status === "Cancelled" ? "u-opacity-6" : ""}
        `}
        title={title}
      >
        <div className="o-media__fixed digital-bet-item__icons">
          <Circle
            color={calcCircleColor()}
            icon={StatusIcon()}
            radius={circleRadius}
            scale={effort && status === "Ongoing" ? circleSizeScale : 1}
          />
        </div>
        <div className="o-media__fluid digital-bet-item__content">
          <div className="digital-bet-item__main">
            <div className="digital-bet-item__label">{title}</div>
          </div>
          <div className="digital-bet-item__aside">
            <BigBet />
          </div>
        </div>
      </div>
      {(feature || dateResume) && (
        <div className="digital-bet-item__meta">
          {feature && <div className="feature">{featureText}</div>}
          {formattedDate && <div className="dateResume">Resume: {formattedDate}</div>}
        </div>
      )}
    </>
  );
};

DigitalBetItem.defaultProps = {
  bigBet: false,
  circleRadius: 13,
  dateResume: "",
  feature: false,
  phase: "Phase",
  title: "Missing title",
  size: "small",
  status: "ongoing",
  type: "products",
};

export default DigitalBetItem;
