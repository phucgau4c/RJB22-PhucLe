import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Disk.module.scss";
import Player from "./Player";

const cx = classNames.bind(styles);

function Disk(props) {
  const { listSongs, setIsSelect, isSelect } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const audioElement = useRef();
  const lengthOfListSong = Object.keys(listSongs).length;
  useEffect(() => {
    isPlaying ? audioElement.current.play() : audioElement.current.pause();
  }, [isPlaying]);

  //Lấy ra phần trăm thời gian đang chạy của bài hát
  const onPlaying = () => {
    const currentTime = audioElement.current.currentTime;
    const audioLenght = audioElement.current.duration;
    const percentTime = (currentTime / audioLenght) * 100;
    setTimer(percentTime);
  };

  return (
    <div className={cx("disk-wrap")}>
      <div className={cx("disk")}>
        <img
          style={{ animation: `${isPlaying ? "" : "a"}` }}
          className={cx("disk-image")}
          src={listSongs[isSelect].image}
          alt={listSongs[isSelect].name}
          height="100px"
        ></img>
        <p className={cx("disk-name")}>{listSongs[isSelect].name}</p>
        <p className={cx("disk-singer")}>{listSongs[isSelect].singer}</p>
        <audio
          src={listSongs[isSelect].mp3}
          ref={audioElement}
          onTimeUpdate={onPlaying}
        ></audio>
        <div className={cx("disk-seek")}>
          <div
            className={cx("seek-child")}
            style={{
              width: `${timer}%`,
            }}
          >
            {console.log("Disk")}
          </div>
        </div>
      </div>
      <Player
        lengthOfListSong={lengthOfListSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setIsSelect={setIsSelect}
        isSelect={isSelect}
      ></Player>
    </div>
  );
}

export default Disk;
