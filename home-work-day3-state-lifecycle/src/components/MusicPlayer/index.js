import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./MusicPlayer.module.scss";

import Disk from "./Disk";
import ListSong from "./ListSong";
import Like from "./ListSong/Like";
import image1 from "../../assets/imgs/cai-duoi-nho.jpg";
import image2 from "../../assets/imgs/qua-chanh-mau-xanh.jpg";
import image3 from "../../assets/imgs/to-thich-cau.jpg";
import image4 from "../../assets/imgs/van-vat-hap-dan.jpg";
import music1 from "../../assets/music/cai-duoi-nho.mp3";
import music2 from "../../assets/music/qua-chanh-mau-xanh.mp3";
import music3 from "../../assets/music/to-thich-cau.mp3";
import music4 from "../../assets/music/van-vat-hap-dan.mp3";
// import music5 from "../../assets/music/3 second music.mp3";

const cx = classNames.bind(styles);

function MusicPlayer() {
  const listSongs = [
    {
      id: "M1",
      name: "Cái đuôi nhỏ",
      image: image1,
      mp3: music1,
      singer: "Cát Vũ Tình & Điện Lưu Muội",
    },
    {
      id: "M2",
      name: "Quả chanh màu xanh",
      image: image2,
      mp3: music2,
      singer: "trung",
    },
    {
      id: "M3",
      name: "Tớ thích cậu",
      image: image3,
      mp3: music3,
      singer: "trung",
    },
    {
      id: "M4",
      name: "Vạn vật hấp dẫn",
      image: image4,
      mp3: music4,
      singer: "trung",
    },
  ];
  const [isSelect, setIsSelect] = useState(0);
  const prevSelect = useRef();

  useEffect(() => {
    prevSelect.current = isSelect;
  }, [isSelect]);

  return (
    <div className={cx("wrapperMusic")}>
      {console.log("MusicPlayer")}
      <div className={cx("listSong")}>
        {listSongs.map((listSong, index) => (
          <div
            key={index}
            className={cx("song-item")}
            style={{
              backgroundColor: `${isSelect === index ? "#dfe6e9" : "#fff"}`,
            }}
          >
            <div
              className={cx("song")}
              key={index}
              onClick={() => {
                setIsSelect(index);
              }}
            >
              <ListSong
                listSongs={listSong}
                index={index}
                select={isSelect}
              ></ListSong>
            </div>

            <Like></Like>
          </div>
        ))}
      </div>
      <Disk
        listSongs={listSongs}
        setIsSelect={setIsSelect}
        isSelect={isSelect}
      ></Disk>
    </div>
  );
}

export default MusicPlayer;
