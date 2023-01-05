import "./gameOutcome.css";
import Hand from "./hand"

const GameOutcome = ({yourChoice, computerChoice, click, winner}) => {
  return (<div className="GameOutcome d-flex justify-content-between mx-auto w-50">
      <div>
        <p>your Choice</p>
        <Hand src={yourChoice}/>
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <h4>{winner}</h4>
        <button className="button" onClick={click}>Play Again?</button>
      </div>
      <div>
        <p>Computers Choice</p>
        <Hand src={computerChoice}/>
      </div>

  </div>);
};

export default GameOutcome;
