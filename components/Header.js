import {useRouter} from "next/router";

const Header = () => {
  const router = useRouter();
  const isActive = (path) => (router.pathname === path ? "nav-main__item--active" : "");
  return (
    <header className="header-main">
      <img className="header-main__logo" src="/logo_stena.svg" />
      <nav className="nav-main">
        <div
          onClick={() => router.push("/")}
          className={`nav-main__item u-ml-a ${isActive("/")}`}
        >
          <a>Portfolio</a>
        </div>
        <div
          onClick={() => router.push("/product-teams")}
          className={`nav-main__item ${isActive("/product-teams")}`}
        >
          <a>Product Teams</a>
        </div>
        <div
          onClick={() => router.push("/trends")}
          className={`nav-main__item ${isActive("/trends")}`}
        >
          Trends
        </div>
        <div
          onClick={() => router.push("/screensaver")}
          className={`nav-main__item u-ml-a ${isActive("/screensaver")}`}
        >
          Screensaver
        </div>
      </nav>
    </header>
  );
};

export default Header;
