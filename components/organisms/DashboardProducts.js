import DigitalBetList from "./DigitalBetList";
import {filterFn} from "../../utils/general";

const DashboardProducts = ({productsList, title}) => {
  const ongoingProducts = productsList.filter((item) =>
    filterFn(item.status, ["Paused", "Cancelled"], "exclude")
  );

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
          <div className="grid-item">
            <DigitalBetList
              title="Future"
              type="products"
              data={ongoingProducts.filter((item) => filterFn(item.phase, ["Future"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="Next"
              type="products"
              data={ongoingProducts.filter((item) => filterFn(item.phase, ["Next"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="0%"
              type="products"
              data={ongoingProducts.filter((item) => filterFn(item.phase, ["0%"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="50%"
              type="products"
              data={ongoingProducts.filter((item) => filterFn(item.phase, ["50%"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="100%"
              type="products"
              data={ongoingProducts.filter((item) => filterFn(item.phase, ["100%"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="Launched products"
              type="products"
              data={ongoingProducts.filter((item) => filterFn(item.phase, ["Launched"]))}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardProducts;
