import "./App.css";
import { useState } from "react";
import Container from "./Container.js";

function App() {
  const { power, setPower } = useState(false);
  const { display, setDisplay } = useState("");
  const { volume, setVolume } = useState(0.5);

  const audioTrigger = (e) => {
    const audio = e.target.children[0];
    const text = e.target.getAttribute("id").replaceAll("-", " ");
    audio.volume = volume;
    if (power) {
      audio.play();
      setDisplay(text);
    }
  };

  const powerHandler = () => {
    setPower(!power);
  };

  const volumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div id="App">
      <Container
        power={power}
        powerHandler={powerHandler}
        display={display}
        volume={volume}
        volumeChange={volumeChange}
        audioTrigger={audioTrigger}
      />
    </div>
  );
}

export default App;
