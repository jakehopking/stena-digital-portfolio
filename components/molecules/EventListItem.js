const EventListItem = ({date, title, desc, tag}) => {
  const parsedDate = new Date(date);
  const day = parsedDate.toLocaleString("en-gb", {day: "numeric"});
  const month = parsedDate.toLocaleString("en-gb", {month: "short"});

  return (
    <li className="event-list__item">
      <div
        className={`event-list__tag ${
          tag === "Internal" ? "event-list__tag--internal" : "event-list__tag--external"
        }`}
      >
        {tag}
      </div>
      <div className="event-list__date">
        <div className="event-list__month">{month}</div>
        <div className="event-list__day">{day}</div>
      </div>
      <div className="event-list__main">
        <div className="event-list__title">{title}</div>
        <div className="event-list__desc">{desc}</div>
      </div>
    </li>
  );
};

export default EventListItem;
