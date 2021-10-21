import EventListItem from "../molecules/EventListItem";

const EventList = ({data}) => {
  // debugger;
  return (
    <ul className="event-list">
      {data.map((item, idx) => {
        return (
          <EventListItem
            date={item.date}
            title={item.title}
            desc={item.desc}
            tag={item.tag}
            key={idx + "-" + item.title}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
