import OverviewSectionSimple from "./OverviewSectionSimple";
import OverviewSectionInnovation from "./OverviewSectionInnovation";
import OverviewSectionHowMuchWeDo from "./OverviewSectionHowMuchWeDo";

const OverviewPanel = ({
  projects,
  team,
  investments,
  innovation,
  howMuchWeDo,
  trends,
  roi,
}) => {
  return (
    <div className="overview-panel">
      {projects && <OverviewSectionSimple data={projects} />}
      {/* {team && <OverviewSectionSimple data={team} />} */}
      {/* {investments && <OverviewSectionInvestments data={investments} chartHeight={250} />} */}
      {innovation && <OverviewSectionInnovation data={innovation} />}
      {howMuchWeDo && <OverviewSectionHowMuchWeDo data={howMuchWeDo} />}
      {/* {roi && <p>ROI</p>} */}
      {/* <div className="overview-panel__info u-mb-2x">
        <h3 className="overview-panel__label o-type-4 u-color-text-accent u-weight-bold u-mb-xs">
          Return on investments
        </h3>
        <div className="overview-panel__content"></div>
      </div> */}
    </div>
  );
};

export default OverviewPanel;
