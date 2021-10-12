import DigitalBetItem from "../molecules/DigitalBetItem";
import {
  getSelectName,
  isMultiSelect,
  getTitleText,
  getRichText,
} from "../../utils/notion";

const DigitalBetList = ({data, title, size}) => {
  return (
    <div className="digital-bet-list">
      <div className="digital-bet-list__title">{title}</div>
      <div className="digital-bet-list__list">
        {data.map(({properties}, idx) => {
          const label = getTitleText(properties.Name);
          const category = getSelectName(properties.Investment).split(" – ").slice(0, 1);
          const bigBet = isMultiSelect(properties["Big bet"]);
          const stage = getSelectName(properties["Explore / Exploit"])
            .split(" – ")
            .slice(0, 1);
          const stakeholder = "Jacøb Wilson";
          const progress = parseInt(getRichText(properties.Progress));
          return (
            <DigitalBetItem
              key={`${idx}` + label}
              bigBet={bigBet}
              category={category}
              // count={bet.count}
              stage={stage}
              label={label}
              // progress={progress}
              size={size}
              group={title}
              stakeholder={stakeholder}
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
