import styles from "./PersonName.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function PersonName({ name, job }) {
  return (
    <>
      <p className={cx("name")}>{name}</p>
      <p className={cx("job")}>{job}</p>
    </>
  );
}

export default PersonName;
