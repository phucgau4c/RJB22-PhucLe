import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import styles from "./TVCard.module.scss";
import tvImg from "../../assets/images/BasicUI/2.jpg";

const cx = classNames.bind(styles);

function TVCard() {
  return (
    <div className={cx("card")}>
      <div className={cx("card-details")}>
        <img src={tvImg} alt="TV" className={cx("card-img")}></img>
        <p className={cx("card-name")}>YOUNG SHOP</p>
        <div className={cx("card-line")}></div>
        <a href="#https://github.com" className={cx("card-link")}>
          Samsung UHD TV 24inch
        </a>
        <p className={cx("card-icons")}>
          <FontAwesomeIcon icon={faStar} className={cx("card-icon")} />
          <FontAwesomeIcon icon={faStar} className={cx("card-icon")} />
          <FontAwesomeIcon icon={faStar} className={cx("card-icon")} />
          <FontAwesomeIcon icon={faStar} className={cx("card-icon")} />
          <FontAwesomeIcon icon={faStar} className={cx("card-icon-off")} />
          <span> 02</span>
        </p>
        <p className={cx("card-price")}>$599</p>
      </div>
    </div>
  );
}

export default TVCard;
