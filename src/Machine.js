function Machine(props) {
  const { power, audioTrigger } = props;
  return (
    <div id="pads">
      <div
        id="Heater-1"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={audioTrigger}
      >
        <audio
          id="Q"
          className="clip"
          src="./audio/Heater-1.mp3"
          preload="auto"
        ></audio>
        Q
      </div>
      <div
        id="Heater-2"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={audioTrigger}
      >
        <audio
          id="W"
          className="clip"
          src="./audio/Heater-2.mp3"
          preload="auto"
        ></audio>
        W
      </div>
      <div
        id="Heater-3"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={audioTrigger}
      >
        <audio
          id="E"
          className="clip"
          src="./audio/Heater-3.mp3"
          preload="auto"
        ></audio>
        E
      </div>
      <div
        id="Heater-4"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={audioTrigger}
      >
        <audio
          id="A"
          className="clip"
          src="./audio/Heater-4_1.mp3"
          preload="auto"
        ></audio>
        A
      </div>
      <div
        id="Clap"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={audioTrigger}
      >
        <audio
          id="S"
          className="clip"
          src="./audio/Heater-6.mp3"
          preload="auto"
        ></audio>
        S
      </div>
      <div
        id="Open-HH"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={audioTrigger}
      >
        <audio
          id="D"
          className="clip"
          src="./audio/Dsc_Oh.mp3"
          preload="auto"
        ></audio>
        D
      </div>
      <div
        id="Kick-and-Hat"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={audioTrigger}
      >
        <audio
          id="Z"
          className="clip"
          src="./audio/Kick_n_Hat.mp3"
          preload="auto"
        ></audio>
        Z
      </div>
      <div
        id="Kick"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={audioTrigger}
      >
        <audio
          id="X"
          className="clip"
          src="./audio/RP4_KICK_1.mp3"
          preload="auto"
        ></audio>
        X
      </div>
      <div
        id="Closed-HH"
        className={power ? "drum-pad power-on" : "drum-pad"}
        onClick={audioTrigger}
      >
        <audio
          id="C"
          className="clip"
          src="./audio/Cev_H2.mp3"
          preload="auto"
        ></audio>
        C
      </div>
    </div>
  );
}

export default Machine;
