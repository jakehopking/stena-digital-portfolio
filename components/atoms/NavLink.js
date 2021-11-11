const NavLink = ({route, title, isActive, router, icon}) => {
  let Icon;
  icon ? (Icon = icon) : null;

  return (
    <div
      onClick={() => router.push(route)}
      className={`nav-main__item ${isActive(route)}`}
    >
      <a>
        {icon && <Icon size="1.5em" />} {title}
      </a>
    </div>
  );
};

export default NavLink;
