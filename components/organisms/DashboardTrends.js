import SurveyList from "./SurveyList";
import {getGroupedListByKey, getTitleAndCount} from "../../utils/general";

const DashboardTrends = ({techTrendsData, recyclingTrendsData}) => {
  // Tech
  const techSurveyByAnswer = getGroupedListByKey({
    array: techTrendsData.data,
    key: "answer",
  });
  const techSurveyByTitleAndCount = getTitleAndCount({object: techSurveyByAnswer}).sort(
    (a, b) => b.count - a.count
  );

  // Recycling
  const recyclingSurveyByAnswer = getGroupedListByKey({
    array: recyclingTrendsData.data,
    key: "answer",
  });
  const recyclingSurveyByTitleAndCount = getTitleAndCount({
    object: recyclingSurveyByAnswer,
  }).sort((a, b) => b.count - a.count);

  // console.log(techSurveyByTitleAndCount);

  return (
    <div className="dashboard dashboard--trends">
      <div className="container u-p-md u-mr-md">
        <section className="dashboard__grid grid grid--half">
          <div className="grid-item">
            <div className="panel panel--fill panel--px-1-rad-def u-p-md">
              <h3 className="u-weight-bold u-mb u-mt-sm">{techTrendsData.title}</h3>
              <h4 className="u-m-z">Total votes: {techTrendsData.data.length}</h4>
              <SurveyList
                data={techSurveyByTitleAndCount}
                total={techTrendsData.data.length}
                color="--color-tertiary-0"
              />
            </div>
          </div>
          <div className="grid-item">
            <div className="panel panel--fill panel--px-1-rad-def u-p-md">
              <h3 className="u-weight-bold u-mb u-mt-sm">{recyclingTrendsData.title}</h3>
              <h4 className="u-m-z">Total votes: {recyclingTrendsData.data.length}</h4>
              <SurveyList
                data={recyclingSurveyByTitleAndCount}
                total={recyclingTrendsData.data.length}
                color="--color-primary-0"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardTrends;
