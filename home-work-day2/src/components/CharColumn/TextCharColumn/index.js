import styles from "./TextCharColumn.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function TextCharColumn({ texts }) {
  return <div className={cx("text")}>{texts}</div>;
}

export default TextCharColumn;
