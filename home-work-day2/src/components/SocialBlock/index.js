import ChildSocialBlock from "./ChildSocialBlock";

const brands = [
  {
    text: "Facebook",
    color: "#619de9",
    iconName: "Facebook",
    total: 5000000000,
    unit: "Likes",
  },
  {
    text: "Twitter",
    color: "#37c9dc",
    iconName: "Twitter",
    total: 400000,
    unit: "Tweets",
  },
  {
    text: "Google +",
    color: "#f68058",
    iconName: "Google",
    total: 460000,
    unit: "Plus",
  },
  {
    text: "Pinterest",
    color: "#f65256",
    iconName: "Pinterest",
    total: 34000,
    unit: "Pins",
  },
];

function SocialBock() {
  return <ChildSocialBlock brands={brands}></ChildSocialBlock>;
}

export default SocialBock;
