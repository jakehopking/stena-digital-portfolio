import FocusListItem from "../molecules/FocusListItem";

const FocusList = ({data}) => {
  return (
    <ul className="focus-list">
      {data.map((item) => {
        return <FocusListItem title={item.title} />;
      })}
    </ul>
  );
};

export default FocusList;
