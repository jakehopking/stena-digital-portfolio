import DashboardResponsiveCirclePacking from "../molecules/DashboardResponsiveCirclePacking";
import {generateChartData} from "../../utils/general";
import {CHART_SCHEMES, CHART_THEME} from "../../theme/theme";

const DashboardCurrentFocus = ({title, chartData}) => {
  const currentFocusChartData = generateChartData({chartData, label: title});
  return (
    <div className="dashboard dashboard--focus">
      <div className="container">
        <section className="dashboard__title u-mb-z">{title}</section>
        <section className="dashboard__grid grid">
          <div className="grid-item">
            <DashboardResponsiveCirclePacking
              data={currentFocusChartData}
              height={800}
              colorScheme={CHART_SCHEMES.four}
              theme={CHART_THEME}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardCurrentFocus;
