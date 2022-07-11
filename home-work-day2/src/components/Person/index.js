import PersonEmail from "./PersonEmail";
import PersonImg from "./PersonImg";
import PersonName from "./PersonName";
import PersonPhone from "./PersonPhone";
import PersonTitle from "./PersonTitle";
import styles from "./Person.module.scss";
import pic1 from "../../assets/images/Block-UI6/1.jpg";
import pic2 from "../../assets/images/Block-UI6/2.jpg";
import pic3 from "../../assets/images/Block-UI6/3.jpg";
import pic4 from "../../assets/images/Block-UI6/4.jpg";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const persons = [
  {
    text: "James Smith",
    job: "coder",
    img: pic1,
    email: {
      content: "robot@gmail.com",
      color: "#f65256",
    },
    phone: {
      content: "0123456678",
      color: "#56d46f",
    },
  },
  {
    text: "James Smith",
    job: "coder",
    img: pic2,
    email: {
      content: "robot@gmail.com",
      color: "#f65256",
    },
    phone: {
      content: "0123456678",
      color: "#56d46f",
    },
  },
  {
    text: "James Smith",
    job: "coder",
    img: pic3,
    email: {
      content: "robot@gmail.com",
      color: "#f65256",
    },
    phone: {
      content: "0123456678",
      color: "#56d46f",
    },
  },
  {
    text: "James Smith",
    job: "coder",
    img: pic4,
    email: {
      content: "robot@gmail.com",
      color: "#f65256",
    },
    phone: {
      content: "0123456678",
      color: "#56d46f",
    },
  },
];

function Person() {
  return (
    <div className={cx("wrapper")}>
      {persons.map((person, index) => (
        <div key={index} className={cx("card")}>
          <PersonImg imgLink={person.img}></PersonImg>
          <PersonName name={person.text} job={person.job}></PersonName>
          <PersonTitle></PersonTitle>
          <PersonEmail email={person.email}></PersonEmail>
          <PersonPhone phone={person.phone}></PersonPhone>
        </div>
      ))}
    </div>
  );
}

export default Person;
