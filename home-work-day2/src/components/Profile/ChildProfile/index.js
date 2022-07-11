import classNames from "classnames/bind";
import styles from "./ChildProfile.module.scss";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJava,
  faHtml5,
  faCss3,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

function ChildProfile(props) {
  const { profiles } = props;
  return (
    <>
      <div className={cx("wrap")}>
        {profiles.map((profile, index) => (
          <div className={cx("container")}>
            <div
              style={{ backgroundColor: profile.color }}
              className={cx("icon")}
            >
              {profile.title === "react" && <FontAwesomeIcon icon={faReact} />}
              {profile.title === "java" && <FontAwesomeIcon icon={faJava} />}
              {profile.title === "html" && <FontAwesomeIcon icon={faHtml5} />}
              {profile.title === "css" && <FontAwesomeIcon icon={faCss3} />}
              {profile.title === "php" && <FontAwesomeIcon icon={faPhp} />}
            </div>
            <div className={cx("name")}> {profile.name}</div>
            <div className={cx("wrap-line")}>
              <div
                className={cx("line")}
                style={{
                  backgroundColor: profile.color,
                  width: `${profile.comments}px`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChildProfile;
