import styles from "./PersonTitle.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faHeart,
  faGraduationCap,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function PersonTitle() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("row")}>
        <span className={cx("col1")}>
          <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon> DOB
        </span>
        <span className={cx("col2")}>23/05/2014</span>
      </div>
      <div className={cx("row")}>
        <span className={cx("col1")}>
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> BG
        </span>
        <span className={cx("col2")}>B+</span>
      </div>
      <div className={cx("row")}>
        <span className={cx("col1")}>
          <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon> EDU
        </span>
        <span className={cx("col2")}>MCA</span>
      </div>
      <div className={cx("row")}>
        <span className={cx("col1")}>
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> RES
        </span>
        <span className={cx("col2")}>Bangalore</span>
      </div>
    </div>
  );
}

export default PersonTitle;
