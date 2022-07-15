import classNames from "classnames/bind";

import styles from "./ListSong.module.scss";

const cx = classNames.bind(styles);

function ListSong(props) {
  const { listSongs } = props;

  return (
    <>
      <p className={cx("id")}>{listSongs.id}</p>
      <img
        src={listSongs.image}
        alt={listSongs.name}
        className={cx("image")}
      ></img>
      <p className={cx("name")}>{listSongs.name}</p>
      <p className={cx("singer")}>{listSongs.singer}</p>
    </>
  );
}

export default ListSong;
