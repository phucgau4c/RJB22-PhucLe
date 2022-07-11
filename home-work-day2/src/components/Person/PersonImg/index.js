import styles from "./PersonImg.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function PersonImg({ imgLink }) {
  return (
    <>
      <img src={imgLink} alt="" className={cx("image")} />
    </>
  );
}

export default PersonImg;
