import { FiPlay, FiPause, FiRepeat } from "react-icons/fi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaRandom } from "react-icons/fa";
import classNames from "classnames/bind";
import styles from "./Player.module.scss";
import { memo } from "react";

const cx = classNames.bind(styles);

function Player(props) {
  const { isPlaying, setIsPlaying, setIsSelect, isSelect, lengthOfListSong } =
    props;
  return (
    <div className={cx("list-icon")}>
      <FaRandom
        onClick={() =>
          setIsSelect(Math.floor(Math.random() * lengthOfListSong))
        }
        className={cx("random")}
      ></FaRandom>
      <MdSkipPrevious
        onClick={() =>
          setIsSelect(isSelect - 1 < 0 ? lengthOfListSong - 1 : isSelect - 1)
        }
        className={cx("prev")}
      ></MdSkipPrevious>
      <p onClick={() => setIsPlaying(!isPlaying)} className={cx("play")}>
        {isPlaying ? <FiPause /> : <FiPlay />}
      </p>
      <MdSkipNext
        onClick={() =>
          setIsSelect(isSelect + 1 === lengthOfListSong ? 0 : isSelect + 1)
        }
        className={cx("next")}
      ></MdSkipNext>
      <FiRepeat className={cx("repeat")}></FiRepeat>
    </div>
  );
}

export default memo(Player);
