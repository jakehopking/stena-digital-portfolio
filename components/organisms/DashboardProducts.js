import DigitalBetList from "./DigitalBetList";
import {filterFn} from "../../utils/general";

const DashboardProducts = ({productsList}) => {
  const onGoingProducts = productsList.filter((item) =>
    filterFn(item.status, ["Paused", "Cancelled"], "exclude")
  );

  return (
    <div className="dashboard dashboard--ideas">
      <div className="container">
        <section className="dashboard__title u-p">Products</section>
        <section className="dashboard__grid grid grid--250">
          <div className="grid-item">
            <DigitalBetList
              title="Future"
              type="products"
              data={onGoingProducts.filter((item) => filterFn(item.phase, ["Future"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="Next"
              type="products"
              data={onGoingProducts.filter((item) => filterFn(item.phase, ["Next"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="0%"
              type="products"
              data={onGoingProducts.filter((item) => filterFn(item.phase, ["0%"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="50%"
              type="products"
              data={onGoingProducts.filter((item) => filterFn(item.phase, ["50%"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="100%"
              type="products"
              data={onGoingProducts.filter((item) => filterFn(item.phase, ["100%"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="Launched products"
              type="products"
              data={onGoingProducts.filter((item) => filterFn(item.phase, ["Launched"]))}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardProducts;
