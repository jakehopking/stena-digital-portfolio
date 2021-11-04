import DigitalBetList from "./DigitalBetList";
import {filterFn} from "../../utils/general";

const DashboardProducts = ({digitalBetsList}) => {
  return (
    <div className="dashboard dashboard--ideas">
      <div className="container">
        <section className="dashboard__title u-p">Ideas</section>
        <section className="dashboard__grid grid grid--250">
          <div className="grid-item">
            <DigitalBetList
              title="Now"
              data={digitalBetsList.filter((item) => filterFn(item.temporality, ["Now"]))}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="Next"
              data={digitalBetsList.filter((item) =>
                filterFn(item.temporality, ["Next"])
              )}
            />
          </div>
          <div className="grid-item">
            <DigitalBetList
              title="Future"
              data={digitalBetsList.filter((item) =>
                filterFn(item.temporality, ["Future"])
              )}
            />
          </div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </section>
      </div>
    </div>
  );
};

export default DashboardProducts;
