import {ImMap} from "react-icons/im";
import {IoGrid, IoPlay, IoPause} from "react-icons/io5";

const NavTools = ({
  isPlaying,
  isMapShowing,
  isScreensaverShowing,
  onToggleCarousel,
  onToggleMap,
  onToggleScreensaver,
}) => {
  return (
    <div className="main-nav__tools u-ml-a u-mr-z">
      {!isMapShowing && !isScreensaverShowing && (
        <button
          className={`button button--icon button--tool ${isPlaying && "button--active"}`}
          onClick={onToggleCarousel}
        >
          {isPlaying ? <IoPause /> : <IoPlay />}
        </button>
      )}
      <button
        className={`button button--icon button--tool ${isMapShowing && "button--active"}`}
        onClick={onToggleMap}
      >
        <ImMap />
      </button>
      <button
        className={`button button--icon button--tool ${
          isScreensaverShowing && "button--active"
        }`}
        onClick={onToggleScreensaver}
      >
        <IoGrid />
      </button>
    </div>
  );
};

export default NavTools;
