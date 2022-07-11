import styles from "./TotalCharColumn.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function TotalCharColumn(props) {
  const { totals, units } = props;

  return (
    <div className={cx("total")}>
      {units}
      {totals.toLocaleString()}
    </div>
  );
}

export default TotalCharColumn;
