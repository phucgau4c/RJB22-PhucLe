import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./ChildCharBar.module.scss";

const cx = classNames.bind(styles);

function ChildCharBar(props) {
  const { types } = props;
  return (
    <div className={cx("wrapper")}>
      {types.map((type, index) => (
        <div key={index} className={cx("container")}>
          <div
            style={{ backgroundColor: type.color1 }}
            className={cx("color1")}
          >
            <p>{type.text}</p>
          </div>
          <div className={cx("colors")}>
            <div
              className={cx("colors-child")}
              style={{
                backgroundColor: type.colors,
                width: `${type.percentage}%`,
              }}
            >
              <p>{type.percentage}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

ChildCharBar.propsType = {
  text: PropTypes.string,
  color1: PropTypes.string,
  colors: PropTypes.string,
  percentage: PropTypes.number,
};

// ChildCharBar.defaultProps = {
//   text: "BANDWIDTH",
//   color1: "#e44c4e",
//   colors: "#f65256",
//   percentage: 20,
// };

export default ChildCharBar;
