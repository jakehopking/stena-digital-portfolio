import DigitalBetItemSimple from "../molecules/DigitalBetItemSimple";

const DigitalBetList = ({data, size, status, title, type}) => {
  return (
    <div className="digital-bet-list">
      <div className="digital-bet-list__title">{title}</div>
      <div className="digital-bet-list__list">
        {data.map((bet, idx) => {
          {
            /* const progress = parseInt(getRichText(properties.Progress)); */
          }
          return (
            <DigitalBetItemSimple
              bigBet={bet.big_bet}
              effort={bet.effort}
              key={`${idx}` + bet.project_name}
              phase={bet.phase}
              productName={bet.product_name}
              size={size}
              status={status}
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
  status: "ongoing",
  title: "Title",
  type: "products",
};

export default DigitalBetList;
