import Display from "./Display";
import Machine from "./Machine";

function Container(props) {
  const { power, powerHandler, display, volume, volumeChange, audioTrigger } =
    props;
  return (
    <div id="drum-machine">
      <Machine power={power} audioTrigger={audioTrigger} />
      <Display
        display={display}
        powerHandler={powerHandler}
        power={power}
        volume={volume}
        volumeChange={volumeChange}
      />
    </div>
  );
}

export default Container;
