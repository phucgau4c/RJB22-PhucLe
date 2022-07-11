import styles from "./ChildSocialBlock.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faGooglePlus,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

function ChildSocialBlock(props) {
  const { brands } = props;
  return (
    <>
      <div className={cx("wrap")}>
        {brands.map((brand, index) => (
          <div
            className={cx("container")}
            key={index}
            style={{ backgroundColor: brand.color }}
          >
            <div className={cx("icon")}>
              {brand.iconName === "Facebook" && (
                <FontAwesomeIcon icon={faFacebook} />
              )}
              {brand.iconName === "Pinterest" && (
                <FontAwesomeIcon icon={faPinterest} />
              )}
              {brand.iconName === "Google" && (
                <FontAwesomeIcon icon={faGooglePlus} />
              )}
              {brand.iconName === "Twitter" && (
                <FontAwesomeIcon icon={faTwitter} />
              )}
            </div>
            <div className={cx("name")}> {brand.text}</div>
            <div className={cx("unit")}>
              <span>{brand.total.toLocaleString()} </span>
              {brand.unit}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChildSocialBlock;
