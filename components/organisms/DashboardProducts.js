import DigitalBetList from "./DigitalBetList";
import {filterFn, organiseListByKey} from "../../utils/general";

const DashboardProducts = ({productsList, title}) => {
  const ongoingProducts = productsList.filter((item) =>
    filterFn(item.status, ["Paused", "Cancelled"], "exclude")
  );

  const ongoingProductsGrouped = organiseListByKey({
    listArray: ongoingProducts,
    key: "phase",
  });

  return (
    <div
      className="dashboard dashboard--products"
      style={{
        "--gridRepeatCount": "6",
        "--gridColWidth": "250px",
      }}
    >
      <div className="container">
        <section className="dashboard__title">{title}</section>
        <section className="dashboard__group-titles">
          <div
            className="dashboard__group-title"
            style={{"--gridSubtitleMultiplier": "2"}}
          >
            Future
          </div>
          <div
            className="dashboard__group-title"
            style={{"--gridSubtitleMultiplier": "3"}}
          >
            Ongoing
          </div>
          <div className="dashboard__group-title">Delivered</div>
        </section>
        <section className="dashboard__grid grid grid--250 grid--alt-cols">
          {ongoingProductsGrouped.map((item, idx) => (
            <div className="grid-item">
              <DigitalBetList
                title={item.title}
                type="products"
                data={item.list}
                key={idx + item.title}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default DashboardProducts;
