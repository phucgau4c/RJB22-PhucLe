import classNames from "classnames/bind";

import styles from "./Clothing.module.scss";
import clothPic from "../../assets/images/BasicUI/1.jpg";

const cx = classNames.bind(styles);

function Clothing() {
  return (
    <div className={cx("BU1")}>
      <div className={cx("cloth-information")}>
        <img src={clothPic} alt="cloth" />
        <ul>
          <li>
            <h3>Clothing & Apparel</h3>
          </li>
          <li>Accessories</li>
          <li>Bags</li>
          <li>Kid's Fashion</li>
          <li>Mens</li>
        </ul>
      </div>
    </div>
  );
}

export default Clothing;
