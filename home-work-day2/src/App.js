import "./App.scss";
import CharBar1 from "./components/CharBar1";
import CharColumn from "./components/CharColumn";
import Clothing from "./components/ClothingCard";
import Person from "./components/Person";
import Profile from "./components/Profile";
import SocialBock from "./components/SocialBlock";
import TVCard from "./components/TVCard";
import VolumeCard from "./components/VolumeCard";

function App() {
  return (
    <div className="App">
      <h2>Bacsic UI 1</h2>
      <Clothing></Clothing>
      <h2>Bacsic UI 2</h2>
      <TVCard></TVCard>
      <h2>Bacsic UI 3</h2>
      <VolumeCard></VolumeCard>
      <h2>Block UI 1</h2>
      <CharBar1></CharBar1>
      <h2>Block UI 2</h2>
      <Profile></Profile>
      <h2>Block UI 3</h2>
      <SocialBock></SocialBock>
      <h2>Block UI 4</h2>
      <CharColumn></CharColumn>
      <h2>Block UI 5</h2>
      <Person></Person>
    </div>
  );
}

export default App;
