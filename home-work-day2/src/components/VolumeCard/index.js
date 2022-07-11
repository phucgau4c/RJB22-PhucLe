import classNames from "classnames/bind";

import styles from "./VolumeCard.module.scss";
import volumnPic from "../../assets/images/BasicUI/3.jpg";

const cx = classNames.bind(styles);

function VolumeCard() {
  return (
    <div className={cx("card-vol")}>
      <div className={cx("vol")}>
        <img src={volumnPic} alt="Harman Kadon" className={cx("vol-img")}></img>
        <p className={cx("vol-title")}>Technology</p>
        <p className={cx("vol-content")}>
          {" "}
          Harman Kadon Onyx Studio Mini, Reviews & Experiences
        </p>

        <p className={cx("date")}>
          <span>Feb 21, 2021 by </span>drfurion
        </p>
      </div>
    </div>
  );
}

export default VolumeCard;
