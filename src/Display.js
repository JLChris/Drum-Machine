function Display(props) {
  const { display, powerHandler, power, volumeChange, volume } = props;
  return (
    <div id="display">
      <h1 id="title">Mr. Drum</h1>
      <div
        id="power-btn"
        onClick={powerHandler}
        style={
          power
            ? { backgroundColor: "black", color: "#F1F7ED" }
            : { backgroundColor: "#F1F7ED", color: "black" }
        }
      >
        <span className="fas fa-power-off"></span>
      </div>
      <div id="pad-info-display">{display}</div>
      <div id="volume-slider">
        <input
          max="1"
          min="0"
          step="0.01"
          type="range"
          value={volume}
          onChange={volumeChange}
        />
      </div>
    </div>
  );
}

export default Display;
