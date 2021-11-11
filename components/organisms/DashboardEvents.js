import {dynamicSort} from "../../utils/general";
import EventList from "./EventList";

const DashboardEvents = ({eventData, title}) => {
  const sortAccenting = eventData.sort(dynamicSort("date"));
  return (
    <div className="dashboard dashboard--focus">
      <div className="container u-mr-2x">
        <section className="dashboard__title">{title}</section>
        <section className="dashboard__grid grid">
          <div className="grid-item">
            <EventList data={sortAccenting} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardEvents;
