import FocusListItem from "../molecules/FocusListItem";

const FocusList = ({data}) => {
  return (
    <ul className="focus-list">
      {data.map((item, idx) => {
        return <FocusListItem title={item.title} key={idx + "-" + item.title} />;
      })}
    </ul>
  );
};

export default FocusList;
