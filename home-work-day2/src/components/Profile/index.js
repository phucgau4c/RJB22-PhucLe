import ChildProfile from "./ChildProfile";

const profiles = [
  {
    name: "HTML",
    title: "html",
    color: "#eb7339",
    followers: 1000,
    followings: 2000,
    messages: 12,
    likes: 2000,
    comments: 50,
  },
  {
    name: "CSS",
    title: "css",
    color: "#2769e2",
    followers: 1000,
    followings: 2000,
    messages: 12,
    likes: 2000,
    comments: 100,
  },
  {
    name: "PHP",
    title: "php",
    color: "#7378ab",
    followers: 1000,
    followings: 2000,
    messages: 12,
    likes: 2000,
    comments: 150,
  },
  {
    name: "Java",
    title: "java",
    color: "#000",
    followers: 1000,
    followings: 2000,
    messages: 12,
    likes: 2000,
    comments: 50,
  },
  {
    name: "React",
    title: "react",
    color: "#61d4f1",
    followers: 1000,
    followings: 2000,
    messages: 12,
    likes: 2000,
    comments: 170,
  },
];

function Profile() {
  return <ChildProfile profiles={profiles}></ChildProfile>;
}

export default Profile;
