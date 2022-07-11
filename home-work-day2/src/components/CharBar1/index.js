import ChildCharBar from "./ChildCharBar";

const bars = [
  {
    text: "BANDWIDTH",
    color1: "#e44c4e",
    colors: "#f65256",
    percentage: 20,
  },
  {
    text: "STORAGE",
    color1: "#32b9cc",
    colors: "#37c9dc",
    percentage: 50,
  },
  {
    text: "USER",
    color1: "#4fc165",
    colors: "#56d46f",
    percentage: 70,
  },
  {
    text: "VISITORS",
    color1: "#e9c137",
    colors: "#fcd33c",
    percentage: 30,
  },
  {
    text: "EMAILS",
    color1: "#ba73d2",
    colors: "#ca7ce3",
    percentage: 45,
  },
  {
    text: "BASIC",
    color1: "#e95dd2",
    colors: "#fc64e4",
    percentage: 80,
  },
  {
    text: "OTHER",
    color1: "#5892d7",
    colors: "#619de9",
    percentage: 37,
  },
];

function CharBar1() {
  return <ChildCharBar types={bars}></ChildCharBar>;
}

export default CharBar1;
