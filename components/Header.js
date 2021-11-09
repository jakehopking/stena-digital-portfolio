import {useEffect, useContext} from "react";
import {useRouter} from "next/router";
import {FiPause, FiPlay} from "react-icons/fi";
import {AppContext} from "../context/appContext";
import {mainNavPageRoutes} from "../data/constants";

const NavLink = ({route, title, isActive, router, type = "text", icon}) => {
  let Icon;
  icon ? (Icon = icon) : null;

  return (
    <div
      onClick={() => router.push(route)}
      className={`nav-main__item ${isActive(route)}`}
    >
      {!icon && <a>{title}</a>}
      {icon && (
        <a>
          <Icon size="1.5em" />
        </a>
      )}
    </div>
  );
};

const Header = () => {
  const {state, dispatch} = useContext(AppContext);
  const {isPlaying, currentRoute} = state;
  const router = useRouter();

  const isActive = (path) => (router.pathname === path ? "nav-main__item--active" : "");

  const nextPage = () => {
    dispatch({
      type: "APP_CAROUSEL_SET_ROUTE",
      payload: currentRoute === mainNavPageRoutes.length - 1 ? 0 : currentRoute + 1,
    });
  };

  const onToggleCarousel = () => {
    dispatch({
      type: isPlaying ? "APP_CAROUSEL_STOP" : "APP_CAROUSEL_START",
    });
  };

  useEffect(() => {
    if (isPlaying) {
      setTimeout(() => {
        nextPage();
      }, 30000);
      console.log(mainNavPageRoutes[currentRoute].route);
      router.push(mainNavPageRoutes[currentRoute].route);
    }
    return () => {
      clearTimeout();
    };
  }, [currentRoute, isPlaying]);

  console.log(state);

  return (
    <header className="header-main">
      <img className="header-main__logo" src="/logo_stena.svg" />
      <nav className="nav-main">
        {mainNavPageRoutes.map((link, idx) => (
          <NavLink
            key={idx + "_" + link.title}
            route={link.route}
            title={link.title}
            isActive={isActive}
            router={router}
          />
        ))}
        <div className="main-nav__tools u-ml-a u-mr-z">
          <button className="button button--icon button--tool" onClick={onToggleCarousel}>
            {isPlaying ? <FiPause /> : <FiPlay />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
