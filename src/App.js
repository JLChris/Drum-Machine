import "./App.css";
import { useState } from "react";
import Container from "./Container.js";

function App() {
  const [power, setPower] = useState(false);
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0.5);

  const audioTrigger = (src, e) => {
    if (power) {
      const audio = new Audio(src);
      audio.volume = volume;
      audio.play();
      const text = e.target.getAttribute("id").replaceAll("-", " ");
      setDisplay(text);
    }
  };

  const powerHandler = () => {
    setPower((p) => !p);
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
