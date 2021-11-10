import {useEffect, useContext, useState} from "react";
import {useRouter} from "next/router";
import {AppContext} from "../context/appContext";
import {NetlifyCMSContext} from "../context/netlifyCmsContext";
import {mainNavPageRoutes} from "../data/constants";
import NavLink from "./atoms/NavLink";
import NavTools from "./molecules/NavTools";
import Modal from "./molecules/Modal";
import DashboardEvents from "./organisms/DashboardEvents";

const Header = () => {
  const {state, dispatch} = useContext(AppContext);
  const {shortcutImage, events} = useContext(NetlifyCMSContext);
  const {isPlaying, currentRoute} = state;
  const [isMapShowing, setIsMapShowing] = useState(false);
  const [isScreensaverShowing, setIsScreensaverShowing] = useState(false);
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

  const onToggleMap = () => {
    setIsMapShowing(!isMapShowing);
    dispatch({
      type: "APP_CAROUSEL_STOP",
    });
  };

  const onToggleScreensaver = () => {
    setIsScreensaverShowing(!isScreensaverShowing);
    dispatch({
      type: "APP_CAROUSEL_STOP",
    });
  };

  useEffect(() => {
    if (isPlaying) {
      setTimeout(() => {
        nextPage();
      }, 30000);
      router.push(mainNavPageRoutes[currentRoute].route);
    }
    return () => {
      clearTimeout();
    };
  }, [currentRoute, isPlaying]);

  return (
    <header
      className={`header-main ${
        (isMapShowing || isScreensaverShowing) && "header-main--withModal"
      }`}
    >
      <img className="header-main__logo" src="/logo_stena.svg" />
      <nav className="nav-main">
        {!isMapShowing &&
          !isScreensaverShowing &&
          mainNavPageRoutes.map((link, idx) => (
            <NavLink
              key={idx + "_" + link.title}
              route={link.route}
              title={link.title}
              isActive={isActive}
              router={router}
            />
          ))}
        <NavTools
          isPlaying={isPlaying}
          isMapShowing={isMapShowing}
          isScreensaverShowing={isScreensaverShowing}
          onToggleCarousel={onToggleCarousel}
          onToggleMap={onToggleMap}
          onToggleScreensaver={onToggleScreensaver}
        />
      </nav>
      <div className="modal-container">
        <Modal onClose={onToggleMap} open={isMapShowing} size="withNav" closeType={null}>
          <img src={shortcutImage.shortcut_image} onClick={onToggleMap} />
        </Modal>
        <Modal onClose={onToggleScreensaver} open={isScreensaverShowing} size="withNav">
          <div className="u-mh-5x u-mv-3x">
            <DashboardEvents eventData={events.events} title="&nbsp;" />
          </div>
          <div className="modal__bg-image">
            <img src="/images/photos/stena_photo_9.jpg" />
          </div>
        </Modal>
      </div>
    </header>
  );
};

export default Header;
