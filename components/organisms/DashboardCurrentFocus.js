import DigitalBetList from "./DigitalBetList";
import DashboardResponsiveCirclePacking from "../molecules/DashboardResponsiveCirclePacking";
import {filterFn} from "../../utils/general";

import {CHART_SCHEMES, CHART_THEME} from "../../theme/theme";

const DashboardCurrentFocus = ({rows, grid, chartData}) => {
  // debugger;
  return (
    <div
      className={`dashboard-stage ${
        rows ? "dashboard-stage--rows" : grid ? "dashboard-stage--grid" : ""
      }`}
    >
      <section className="dashboard-stage__chart">
        <div className="o-grid o-grid--fill">
          <div className="o-grid__col u-1/2">
            <DashboardResponsiveCirclePacking
              data={chartData.circlePackingOne}
              height={700}
              colorScheme={CHART_SCHEMES.one}
              theme={CHART_THEME}
            />
          </div>
          <div className="o-grid__col u-1/2">
            <DashboardResponsiveCirclePacking
              data={chartData.circlePackingTwo}
              height={700}
              colorScheme={CHART_SCHEMES.two}
              theme={CHART_THEME}
            />
          </div>
        </div>
      </section>
      <section className="dashboard-stage__info">
        <div className="o-grid">
          <div className="o-grid__col u-1/3"></div>
          <div className="o-grid__col u-1/3"></div>
          <div className="o-grid__col u-1/3"></div>
        </div>
      </section>
    </div>
  );
};

export default DashboardCurrentFocus;
