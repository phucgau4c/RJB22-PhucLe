import styles from "./ColumnCharColumn.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ColumnCharColumn({ percents }) {
  return (
    <div className={cx("wrap")}>
      {percents.map((percent, index) => (
        <div className={cx("wrap-col")} key={index}>
          <div className={cx("col")}>
            <div
              style={{
                height: `${percent.height}%`,
                backgroundColor: percent.color,
              }}
            ></div>
          </div>
          <p>{percent.date}</p>
        </div>
      ))}
    </div>
  );
}

export default ColumnCharColumn;
