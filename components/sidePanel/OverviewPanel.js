import OverviewSectionSimple from "./OverviewSectionSimple";
import OverviewSectionInvestments from "./OverviewSectionInvestments";
import FlexBarChart from "../molecules/FlexBarChart/FlexBarChart";

const OverviewPanel = ({projects, team, investments, roi}) => {
  return (
    <div className="overview-panel">
      {projects && <OverviewSectionSimple data={projects} />}
      {team && <OverviewSectionSimple data={team} />}
      {investments && <OverviewSectionInvestments data={investments} chartHeight={200} />}
      {/* {roi && <p>ROI</p>} */}
      <div className="overview-panel__info u-mb-2x">
        <h3 className="overview-panel__label o-type-4 u-color-text-accent u-weight-bold u-mb-xs">
          Return on investments
        </h3>
        <div className="overview-panel__content"></div>
      </div>
    </div>
  );
};

export default OverviewPanel;
