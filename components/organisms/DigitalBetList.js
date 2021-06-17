import DigitalBetItem from "../molecules/DigitalBetItem";

const DigitalBetList = ({data, title}) => {
  return (
    <div className="digital-bet-list">
      <div className="digital-bet-list__title">{title}</div>
      <div className="digital-bet-list__list">
        {data.map((bet, idx) => {
          return (
            <DigitalBetItem
              key={idx + bet.group}
              category={bet.category}
              state={bet.state}
              group={bet.group}
              label={bet.label}
              progress={bet.progress}
              bigBet={bet.bigBet}
            />
          );
        })}
      </div>
    </div>
  );
};

DigitalBetList.defaulProps = {
  title: "Title",
  data: [{}],
};

export default DigitalBetList;
