import FocusList from "./FocusList";
import EventList from "./EventList";

const DashboardCurrentFocus = ({focusData, eventData}) => {
  return (
    <div className="dashboard-projects">
      <div className="container u-p-md u-mr-md">
        <section className="dashboard-projects__grid grid grid--half">
          <div className="grid-item">
            <div className="panel panel--fill panel--px-1-rad-def u-p-md">
              <div className="o-type-5">Focus areas</div>
              <FocusList data={focusData} />
            </div>
          </div>
          <div className="grid-item">
            <div className="panel panel--fill panel--px-1-rad-def u-p-md">
              <div className="o-type-5">Upcoming innovation events</div>
              <EventList data={eventData} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardCurrentFocus;
