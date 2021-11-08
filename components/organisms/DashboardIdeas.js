import DigitalBetList from "./DigitalBetList";
import {filterFn, organiseListByKey} from "../../utils/general";

const DashboardIdeas = ({ideasList, title}) => {
  const ongoingIdeas = ideasList.filter((item) =>
    filterFn(item.status, ["Paused", "Cancelled"], "exclude")
  );
  const ongoingIdeasGrouped = organiseListByKey({listArray: ongoingIdeas, key: "phase"});

  return (
    <div
      className="dashboard dashboard--ideas"
      style={{
        "--gridRepeatCount": "5",
        "--gridColWidth": "270px",
      }}
    >
      <div className="container">
        <section className="dashboard__title">{title}</section>
        <section className="dashboard__group-titles">
          <div
            className="dashboard__group-title"
            style={{"--gridSubtitleMultiplier": "4"}}
          >
            Explore
          </div>
          <div className="dashboard__group-title">Exploit</div>
        </section>
        <section className="dashboard__grid grid grid--250 grid--alt-cols">
          {ongoingIdeasGrouped.map((item, idx) => (
            <div className="grid-item" key={idx + item.title}>
              <DigitalBetList title={item.title} type="ideas" data={item.list} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default DashboardIdeas;
