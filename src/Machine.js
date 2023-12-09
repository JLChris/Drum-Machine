import "./Machine.css";
import heater1 from "./audio/Heater-1.mp3";
import heater2 from "./audio/Heater-2.mp3";
import heater3 from "./audio/Heater-3.mp3";
import heater4 from "./audio/Heater-4_1.mp3";
import heater5 from "./audio/Heater-6.mp3";
import kickAndHat from "./audio/Kick_n_Hat.mp3";
import kick from "./audio/RP4_KICK_1.mp3";
import closedHH from "./audio/Cev_H2.mp3";
import openHH from "./audio/Dsc_Oh.mp3";

function Machine(props) {
  const { power, audioTrigger } = props;
  return (
    <div id="pads">
      <div
        id="Heater-1"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={(e) => audioTrigger(heater1, e)}
      >
        Q
      </div>
      <div
        id="Heater-2"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={(e) => audioTrigger(heater2, e)}
      >
        W
      </div>
      <div
        id="Heater-3"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={(e) => audioTrigger(heater3, e)}
      >
        E
      </div>
      <div
        id="Heater-4"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={(e) => audioTrigger(heater4, e)}
      >
        A
      </div>
      <div
        id="Clap"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={(e) => audioTrigger(heater5, e)}
      >
        S
      </div>
      <div
        id="Open-HH"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={(e) => audioTrigger(openHH, e)}
      >
        D
      </div>
      <div
        id="Kick-and-Hat"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={(e) => audioTrigger(kickAndHat, e)}
      >
        Z
      </div>
      <div
        id="Kick"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={(e) => audioTrigger(kick, e)}
      >
        X
      </div>
      <div
        id="Closed-HH"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={(e) => audioTrigger(closedHH, e)}
      >
        C
      </div>
    </div>
  );
}

export default Machine;
