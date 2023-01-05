import React, { useState } from "react";
import Score from "./components/score"
import GameWrapper from "./components/gameWrapper"
import Play from "./components/play"
import GameOutcome from "./components/gameOutcome"
import Rules from "./components/rules"
import './App.css';
const throws = [
  'paper', 'rock', 'scissors'
]
function App() {
  let [game, setGame] = useState({
    total: 0,
    choice: "",
    computer: "",
    winner: ""
  });
  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }
  const playAgain = () =>{
    setGame({
      ...game,
      choice: "",
      computer: "",
      winner: ""
    });
  }
  const computerPicks = () => {
    return throws[Math.floor(Math.random() * 3)];
  };
  const gameResult = (playerThrow, computerThrow) => {
    let result = 0
    if (playerThrow === "rock") {
      if(computerThrow === "scissors") {
          result = 3;
        }else if(computerThrow === "rock") {
         result = 1;
        }else {
          result = 0
        }
    }
    if (playerThrow === "scissors") {
      if(computerThrow === "scissors") {
          result = 1;
        }else if(computerThrow === "rock") {
         result = 0;
        }else {
          result = 3
        }
    }
    if (playerThrow === "paper") {
      if(computerThrow === "scissors") {
          result = 0;
        }else if(computerThrow === "rock") {
         result = 3;
        }else {
          result = 1
        }
    }
    return result
  }
  const rockClickHandler = (e) => {
    e.preventDefault();
    const computerThrow = computerPicks()
    const points = gameResult("rock", computerThrow)
    const winner = (points === 3 ? "You Win"
      : points === 1 ? "Its a Draw"
      : "Better Luck Next Time")
    const score = points + game.total

    setGame({
      ...game,
      choice: "rock",
      computer: computerThrow,
      total: score,
      winner: winner
    });
  };
  const paperClickHandler = (e) => {
    e.preventDefault();
    const computerThrow = computerPicks()
    const points = gameResult("paper", computerThrow)
    const winner = (points === 3 ? "You Win"
    : points === 1 ? "Its a Draw"
    : "Better Luck Next Time")
    const score = points + game.total
    setGame({
      ...game,
      choice: "paper",
      computer: computerThrow,
      total: score,
      winner: winner
    });

  };
  const scissorClickHandler = (e) => {
    e.preventDefault();
    const computerThrow = computerPicks()
    const points = gameResult("scissors", computerThrow)
    const winner = (points === 3 ? "You Win"
    : points === 1 ? "Its a Draw"
    : "Better Luck Next Time")
    const score = points + game.total
    setGame({
      ...game,
      choice: "scissors",
      computer: computerThrow,
      total: score,
      winner: winner
    });
  };
  const displayRules = (e) => {
    e.preventDefault();

  }
  return (
    <div className="App">
      <br/>
      <br/>
      <Score total={game.total}/>
      <GameWrapper>
        { !game.choice ?
            throws.map((hand, i) => {
                return (
                  <Play
                    key={i}
                    src={hand}
                    onClick={
                      hand === "rock" ? rockClickHandler
                      : hand === "paper" ? paperClickHandler
                      : scissorClickHandler
                    }
                  />
                );
            })
          : <GameOutcome
              yourChoice={game.choice}
              computerChoice={game.computer}
              click={playAgain}
              winner={game.winner}
            />
        }
      </GameWrapper>
      <Rules  onClick={displayRules}/>
    </div>
  );
}

export default App;
