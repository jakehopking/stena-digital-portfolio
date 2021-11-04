import {useState, useEffect, useRef} from "react";
import {FiPause} from "react-icons/fi";

import {useRouter} from "next/router";

const pageRoutes = [
  {
    title: "Trends",
    route: "/trends",
  },
  {
    title: "Current Focus",
    route: "/current-focus",
  },
  {
    title: "Events",
    route: "/events",
  },
  {
    title: "Ideas",
    route: "/ideas",
  },
  {
    title: "Products",
    route: "/",
  },
  {
    title: "Recycle Bin",
    route: "/recycle-bin",
  },
];

const NavLink = ({route, title, isActive, router, type = "text", icon}) => {
  let Icon;
  icon ? (Icon = icon) : null;

  return (
    <div
      onClick={() => router.push(route)}
      className={`nav-main__item u-ml-a ${isActive(route)}`}
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
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const length = pageRoutes.length;
  // let currentCount = useRef(count);
  const isActive = (path) => (router.pathname === path ? "nav-main__item--active" : "");

  // const nextPage = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const onToggleCarousel = () => {
  //   setIsPlaying(!isPlaying);
  // };

  // useEffect(() => {
  //   if (isPlaying) {
  //     setTimeout(() => {
  //       nextPage();
  //     }, 5000);
  //     console.log(pageRoutes[current].route);
  //     router.push(pageRoutes[current].route);
  //   }
  // }, [current, isPlaying]);

  return (
    <header className="header-main">
      <img className="header-main__logo" src="/logo_stena.svg" />
      <nav className="nav-main">
        {pageRoutes.map((link, idx) => (
          <NavLink
            key={idx + "_" + link.title}
            route={link.route}
            title={link.title}
            isActive={isActive}
            router={router}
          />
        ))}
        {/* <button className="button" onClick={onToggleCarousel}>
          {isPlaying ? "Stop" : "Start"}
        </button> */}
      </nav>
    </header>
  );
};

export default Header;
