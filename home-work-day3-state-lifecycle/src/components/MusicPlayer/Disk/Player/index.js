import { FiPlay, FiPause, FiRepeat } from "react-icons/fi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaRandom } from "react-icons/fa";
import classNames from "classnames/bind";
import styles from "./Player.module.scss";
import { memo, useState } from "react";

const cx = classNames.bind(styles);

function Player(props) {
  const [repeat, setRepeat] = useState(false);
  const {
    isPlaying,
    setIsPlaying,
    setIsSelect,
    isSelect,
    lengthOfListSong,
    audioElement,
  } = props;

  //lặp lại 1 bài hát khi active hàm repeat
  const repeatSingle = () => {
    if (audioElement.current.ended) {
      audioElement.current.currentTime = 0;
      if (audioElement.current.currentTime === 0) {
        setIsPlaying(true);
      }
    } else {
      console.log("none active");
    }
  };

  return (
    <div className={cx("list-icon")}>
      <FaRandom
        onClick={
          () => setIsSelect(Math.floor(Math.random() * lengthOfListSong)) // khi click vào sẽ random bài hát ngẫu nhiên
        }
        className={cx("random")}
      ></FaRandom>
      <MdSkipPrevious
        onClick={() => {
          setIsSelect(isSelect - 1 < 0 ? lengthOfListSong - 1 : isSelect - 1);
          setIsPlaying(false);
        }}
        className={cx("prev")}
      ></MdSkipPrevious>
      <p onClick={() => setIsPlaying(!isPlaying)} className={cx("play")}>
        {isPlaying ? <FiPause /> : <FiPlay />}
      </p>
      <MdSkipNext
        onClick={() => {
          //khi click sẽ chuyển bài, nếu vị trí bài hát = độ dài của list bài hát thì sẽ được chuyển đến bài hát đầu tiên, khi chuyển bài hát biến isPlaying sẽ được set thành false
          setIsSelect(isSelect + 1 === lengthOfListSong ? 0 : isSelect + 1);
          setIsPlaying(false);
        }}
        className={cx("next")}
      ></MdSkipNext>
      <FiRepeat
        className={cx("repeat")}
        onClick={() => {
          setRepeat(!repeat);
        }}
        style={{ color: `${repeat ? "#ff7979" : "#000"}` }}
      ></FiRepeat>
      {repeat && repeatSingle()}
      {}
    </div>
  );
}

export default memo(Player);
