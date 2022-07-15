import React, { useState } from "react";
import classNames from "classnames/bind";
import { AiFillHeart } from "react-icons/ai";
import styles from "./Like.module.scss";

const cx = classNames.bind(styles);

function Like() {
  const [like, setLike] = useState(false);
  return (
    <>
      <AiFillHeart
        className={cx("animation")}
        onClick={() => setLike(!like)}
        style={{ color: `${like ? "#e74c3c" : "#95a5a6"}` }}
      ></AiFillHeart>
    </>
  );
}

export default Like;
