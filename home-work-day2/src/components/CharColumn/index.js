import ColumnCharColumn from "./ColumnCharColumn";
import TextCharColumn from "./TextCharColumn";
import TotalCharColumn from "./ToTalCharColumn";
import styles from "./CharColumn.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const charts = [
  {
    text: `TODAY'S VISITORS`,
    total: 24599,
    unit: "",
    percentages: [
      { height: 20, color: "#f44f51", date: "MON" },
      { height: 45, color: "#56d46f", date: "TUE" },
      { height: 30, color: "#fcd33c", date: "WED" },
      { height: 80, color: "#37cadf", date: "THU" },
      { height: 75, color: "#f68058", date: "FRI" },
    ],
  },
  {
    text: `YESTERDAY'S VISITORS`,
    total: 15699,
    unit: "",
    percentages: [
      { height: 20, color: "#f44f51", date: "MON" },
      { height: 45, color: "#56d46f", date: "TUE" },
      { height: 30, color: "#fcd33c", date: "WED" },
      { height: 80, color: "#37cadf", date: "THU" },
      { height: 75, color: "#f68058", date: "FRI" },
    ],
  },
  {
    text: `TOTAL DOWNLOADS`,
    total: 124599,
    unit: "",
    percentages: [
      { height: 20, color: "#f44f51", date: "MON" },
      { height: 45, color: "#56d46f", date: "TUE" },
      { height: 30, color: "#fcd33c", date: "WED" },
      { height: 80, color: "#37cadf", date: "THU" },
      { height: 75, color: "#f68058", date: "FRI" },
    ],
  },
  {
    text: `CURRENT INCOME`,
    total: 54599,
    unit: "$",
    percentages: [
      { height: 20, color: "#f44f51", date: "MON" },
      { height: 45, color: "#56d46f", date: "TUE" },
      { height: 30, color: "#fcd33c", date: "WED" },
      { height: 80, color: "#37cadf", date: "THU" },
      { height: 75, color: "#f68058", date: "FRI" },
    ],
  },
];

function CharColumn() {
  return (
    <div className={cx("wrap")}>
      {charts.map((chart, index) => (
        <div className={cx("block")} key={index}>
          <TextCharColumn texts={chart.text}></TextCharColumn>
          <TotalCharColumn
            units={chart.unit}
            totals={chart.total}
          ></TotalCharColumn>
          <ColumnCharColumn percents={chart.percentages}></ColumnCharColumn>
        </div>
      ))}
    </div>
  );
}

export default CharColumn;
