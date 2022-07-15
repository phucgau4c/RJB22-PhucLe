import { FiPlay, FiPause, FiRepeat } from "react-icons/fi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaRandom } from "react-icons/fa";
import classNames from "classnames/bind";
import styles from "./Player.module.scss";

const cx = classNames.bind(styles);

function Player(props) {
  const { isPlaying, setIsPlaying } = props;
  return (
    <div className={cx("list-icon")}>
      <FaRandom className={cx("random")}></FaRandom>
      <MdSkipPrevious className={cx("prev")}></MdSkipPrevious>
      <p onClick={() => setIsPlaying(!isPlaying)} className={cx("play")}>
        {isPlaying ? <FiPause /> : <FiPlay />}
      </p>
      <MdSkipNext className={cx("next")}></MdSkipNext>
      <FiRepeat className={cx("repeat")}></FiRepeat>
    </div>
  );
}

export default Player;
