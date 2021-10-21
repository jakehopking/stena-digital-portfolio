import OverviewSectionSimple from "./OverviewSectionSimple";
import OverviewSectionInnovation from "./OverviewSectionInnovation";
import OverviewSectionHowMuchWeDo from "./OverviewSectionHowMuchWeDo";
import OverviewSectionTrends from "./OverviewSectionTrends";

const OverviewPanel = ({
  projects,
  team,
  investments,
  innovation,
  howMuchWeDo,
  trends,
}) => {
  return (
    <div className="overview-panel">
      {projects && <OverviewSectionSimple data={projects} />}
      {/* {team && <OverviewSectionSimple data={team} />} */}
      {/* {investments && <OverviewSectionInvestments data={investments} chartHeight={250} />} */}
      {innovation && <OverviewSectionInnovation data={innovation} />}
      {howMuchWeDo && <OverviewSectionHowMuchWeDo data={howMuchWeDo} />}
      {trends && <OverviewSectionTrends data={trends} />}
    </div>
  );
};

export default OverviewPanel;
