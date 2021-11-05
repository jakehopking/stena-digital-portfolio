import DigitalBetList from "./DigitalBetList";
import {filterFn} from "../../utils/general";

const DashboardIdeas = ({ideasList, title}) => {
  const ongoingIdeas = ideasList.filter((item) =>
    filterFn(item.status, ["Paused", "Cancelled"], "exclude")
  );
  // debugger;

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
        <section className="dashboard__grid grid grid--250">
          <div className="grid-item">
            <DigitalBetList
              title="New ideas"
              type="ideas"
              data={ongoingIdeas.filter((item) => filterFn(item.phase, ["New ideas"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="Test"
              type="ideas"
              data={ongoingIdeas.filter((item) => filterFn(item.phase, ["Test"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="Deep test"
              type="ideas"
              data={ongoingIdeas.filter((item) => filterFn(item.phase, ["Deep test"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="Dragons den"
              type="ideas"
              data={ongoingIdeas.filter((item) => filterFn(item.phase, ["Dragons den"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="Transfer to product"
              type="ideas"
              data={ongoingIdeas.filter((item) =>
                filterFn(item.phase, ["Transfer to product"])
              )}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardIdeas;
