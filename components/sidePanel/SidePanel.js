const SidePanel = ({label = "Overview", children}) => (
  <div className="side-panel">
    {label && <h2 className="h3 side-panel__label u-weight-bold">{label}</h2>}
    <div className="side-panel__content">{children}</div>
  </div>
);

export default SidePanel;
