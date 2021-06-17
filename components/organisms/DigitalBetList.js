import DigitalBetItem from "../molecules/DigitalBetItem";

const DigitalBetList = ({data, title, size}) => {
  return (
    <div className="digital-bet-list">
      <div className="digital-bet-list__title">{title}</div>
      <div className="digital-bet-list__list">
        {data.map((bet, idx) => {
          return (
            <DigitalBetItem
              key={idx + bet.group}
              bigBet={bet.bigBet}
              category={bet.category}
              count={bet.count}
              group={bet.group}
              label={bet.label}
              progress={bet.progress}
              size={size}
              state={bet.state}
            />
          );
        })}
      </div>
    </div>
  );
};

DigitalBetList.defaulProps = {
  data: [{}],
  size: "",
  title: "Title",
};

export default DigitalBetList;
