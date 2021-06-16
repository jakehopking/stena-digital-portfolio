import ProgressBar from "../atoms/ProgressBar";

const bigBetText = "Big Bet";

const DigitalBetItem = ({category, state, group, label, progress, bigBet, size}) => {
  return (
    <div
      className={`o-media o-media--quarter digital-bet-item ${
        size ? "digital-bet-item--" + size : ""
      }`}
    >
      <div className="o-media__fixed digital-bet-item__icons">
        <div className="">{group}</div>
        <div className="">{bigBet ? bigBetText : ""}</div>
      </div>
      <div className="o-media__fluid digital-bet-item__content">
        <div className="digital-bet-item__main">
          <div className="">{category}</div>
          <div className="">{label}</div>
          <ProgressBar value={progress} />
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
