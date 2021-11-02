import Circle from "../atoms/Circle";
import ProgressBar from "../atoms/ProgressBar";

const SurveyListItem = ({title, count, index, total, color}) => {
  return (
    <li className={`${index > 3 ? "u-opacity-4" : ""} survey-list__item`}>
      <div className="survey-list__index u-mr">
        {index < 4 && <Circle color={color} text={index} radius={13} />}
      </div>
      <ProgressBar
        size="large"
        value={count}
        total={total}
        label={title}
        showValue={count}
        valueSymbol={null}
        barColor={color}
        trackColor="--color-grey-06"
        className="progress-bar--survey survey-list__progress"
      />
    </li>
  );
};

export default SurveyListItem;
