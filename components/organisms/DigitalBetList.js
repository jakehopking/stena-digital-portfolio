import DigitalBetItemSimple from "../molecules/DigitalBetItemSimple";

const DigitalBetList = ({data, size, title, type}) => {
  return (
    <div className="digital-bet-list">
      <div className="digital-bet-list__title">{title}</div>
      <div className="digital-bet-list__list">
        {data.map((bet, idx) => {
          return (
            <DigitalBetItemSimple
              bigBet={bet.big_bet}
              dateResume={bet.date_resume}
              effort={bet.effort}
              feature={bet.feature}
              key={`${idx}` + bet.title}
              phase={bet.phase}
              title={bet.title}
              size={size}
              status={bet.status}
              type={type}
            />
          );
        })}
      </div>
    </div>
  );
};

DigitalBetList.defaultProps = {
  data: [{}],
  size: "small",
  title: "Title",
  type: "products",
};

export default DigitalBetList;
