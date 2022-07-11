import styles from "./PersonPhone.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function PersonPhone({ phone }) {
  return (
    <div className={cx("wrapper")} style={{ backgroundColor: phone.color }}>
      <p>PHONE NQ</p>
      <div className={cx("phone")}>
        <FontAwesomeIcon
          icon={faPhone}
          className={cx("icon")}
        ></FontAwesomeIcon>
        {phone.content}
      </div>
    </div>
  );
}

export default PersonPhone;
