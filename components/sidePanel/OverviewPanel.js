import OverviewSectionSimple from "./OverviewSectionSimple";

const OverviewPanel = ({projects, team, investments, roi}) => {
  return (
    <div className="overview-panel">
      {projects && <OverviewSectionSimple data={projects} />}
      {team && <OverviewSectionSimple data={team} />}
      {/* {investments && <p>Investments</p>}
      {roi && <p>ROI</p>} */}
      <div className="overview-panel__info u-mb-2x">
        <h3 className="overview-panel__label o-type-4 u-color-text-accent u-weight-bold u-mb-xs">
          Investments
        </h3>
        <div className="overview-panel__content">
          <div className="o-grid">
            <div className="o-grid__col u-1/2">1</div>
            <div className="o-grid__col u-1/2">2</div>
          </div>
        </div>
      </div>
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
