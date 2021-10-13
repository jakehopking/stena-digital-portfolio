import DigitalBetItem from "../molecules/DigitalBetItem";

const DigitalBetList = ({data, title, size}) => {
  return (
    <div className="digital-bet-list">
      <div className="digital-bet-list__title">{title}</div>
      <div className="digital-bet-list__list">
        {data.map((bet, idx) => {
          {
            /* const progress = parseInt(getRichText(properties.Progress)); */
          }
          return (
            <DigitalBetItem
              key={`${idx}` + bet.project_name}
              bigBet={bet.big_bet}
              productTeam={bet.product_team}
              // count={bet.count}
              phase={bet.phase}
              projectName={bet.project_name}
              // progress={progress}
              size={size}
              group={title}
              stakeholder={bet.project_stakeholder}
            />
          );
        })}
      </div>
    </div>
  );
};

DigitalBetList.defaultProps = {
  data: [{}],
  size: "",
  title: "Title",
};

export default DigitalBetList;
