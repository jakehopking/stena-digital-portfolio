const SidePanel = ({label = "Overview", children}) => (
  <div className="side-panel">
    {label && <h2 className="h5 side-panel__label u-mb-2x u-weight-bold">{label}</h2>}
    <div className="side-panel__content">{children}</div>
  </div>
);

export default SidePanel;
