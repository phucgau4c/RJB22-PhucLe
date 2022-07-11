import styles from "./PersonEmail.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function PersonEmail({ email }) {
  return (
    <div className={cx("wrapper")} style={{ backgroundColor: email.color }}>
      <p>EMAIL ID</p>
      <div className={cx("email")}>
        <FontAwesomeIcon
          icon={faEnvelope}
          className={cx("icon")}
        ></FontAwesomeIcon>
        {email.content}
      </div>
    </div>
  );
}

export default PersonEmail;
