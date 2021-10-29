import {useState, useEffect, useReducer} from "react";
import SurveyListItem from "../molecules/SurveyListItem";

const SurveyList = ({data, total, color}) => {
  const showCountDefault = 3;
  const listLength = data.length;
  const [showAll, setShowAll] = useState(false);
  const [showCount, setShowCount] = useState(showCountDefault);
  const [surveyList, setSurveyList] = useState(data.slice(0, showCount));

  const onShowAll = () => {
    setShowAll(!showAll);

    showAll ? setShowCount(undefined) : setShowCount(showCountDefault);
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
      {listLength >= showCountDefault && (
        <button onClick={onShowAll}>{showAll ? "Show all" : "Hide all"}</button>
      )}
    </>
  );
};

export default SurveyList;
