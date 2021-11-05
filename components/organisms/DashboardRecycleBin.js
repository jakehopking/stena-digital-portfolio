import DigitalBetList from "./DigitalBetList";
import {filterFn} from "../../utils/general";

const DashboardProducts = ({productsList, ideasList, title}) => {
  const inactiveProducts = productsList.filter((item) =>
    filterFn(item.status, ["Paused", "Cancelled"])
  );

  const inactiveIdeas = ideasList.filter((item) =>
    filterFn(item.status, ["Paused", "Cancelled"])
  );

  return (
    <div className="dashboard dashboard--ideas">
      <div className="container">
        <section className="dashboard__title">{title}</section>
        <section className="dashboard__grid grid grid--250">
          <div className="grid-item">
            <DigitalBetList title="Ideas" type="ideas" data={inactiveIdeas} />
          </div>
          <div className="grid-item">
            <DigitalBetList title="Products" type="ideas" data={inactiveProducts} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardProducts;
