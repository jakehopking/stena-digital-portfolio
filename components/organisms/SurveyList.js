import {useState, useEffect, useReducer} from "react";
import SurveyListItem from "../molecules/SurveyListItem";

const SurveyList = ({data, total, color, hideAllCount = 7}) => {
  const listLength = data.length;
  const [hideAll, setHideAll] = useState(true);
  const [showCount, setShowCount] = useState(hideAllCount);
  const [surveyList, setSurveyList] = useState(data.slice(0, showCount));

  const onShowAll = () => {
    setHideAll(!hideAll);
    hideAll ? setShowCount(undefined) : setShowCount(hideAllCount);
  };

  useEffect(() => {
    setSurveyList(data.slice(0, showCount));
    return () => {};
  }, [showCount]);

  return (
    <>
      <ul className="survey-list">
        {surveyList.map((item, idx) => {
          return (
            <SurveyListItem
              key={idx + "_" + item.answer}
              title={item.title}
              count={item.count}
              total={total}
              index={idx + 1}
              color={color}
            />
          );
        })}
      </ul>
      {listLength > hideAllCount && (
        <button onClick={onShowAll} className="button">
          {hideAll ? "View all" : "Hide all"}
        </button>
      )}
    </>
  );
};

export default SurveyList;
