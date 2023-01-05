import "./score.css";
import logo from "./images/logo.svg"
const Score = ({ total }) => {
  return (<div className="scoreBoard d-flex justify-content-between mx-auto w-50 border p-4">
    <div className="logobox">
     <img src={logo} className="App-logo " alt="logo" />
    </div>
    <div className="whiteBox">
      <p>score</p>
      <p>{total}</p>
    </div>
  </div>
  )
};

export default Score;
