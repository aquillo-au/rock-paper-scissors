import "./hand.css";
import paper from "./images/icon-paper.svg"
import rock from "./images/icon-rock.svg"
import scissors from "./images/icon-scissors.svg"


const Hand = ({ src }) => {
  return (<img src={ src === "rock" ? rock
  : src === "paper" ? paper
  : scissors} className={`${src} hand`} alt={src}/>
  )
};

export default Hand;
