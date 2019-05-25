import React, { useState } from "react";
import "../styles/App.css";
import Coin from "./Coin";

const CoinSide = {
  HEADS: "Heads",
  TAILS: "Tails",
};

const defaultState = {
  flipping: false,
  side: Math.random() < 0.5 ? CoinSide.HEADS : CoinSide.TAILS,
  heads: 0,
  tails: 0,
};

const App = () => {
  const [side, setSide] = useState(defaultState.side);
  const [flipping, setFlipping] = useState(defaultState.flipping);
  const [tails, setTails] = useState(defaultState.tails);
  const [heads, setHeads] = useState(defaultState.heads);

  const handleFlip = () => {
    if (!flipping) {
      setFlipping(true);
    }
  };

  const addTally = (side) => {
    let tallyContainer;
    switch (side) {
      case "Heads":
        tallyContainer = document.getElementById("head-tally");
        break;
      case "Tails":
        tallyContainer = document.getElementById("tail-tally");
        break;
      default:
        break;
    }
    tallyContainer.appendChild(document.createElement("li"));
  };

  const handleFinish = (side) => {
    switch (side) {
      case CoinSide.HEADS:
        setHeads(heads + 1);
        break;
      case CoinSide.TAILS:
        setTails(tails + 1);
        break;
      default:
        /* how..? */ break;
    }
    addTally(side);
  };

  return (
    <div className="App">
      <div className="body">
        <div className="counts">          
          <div className={`head count`}>
            <h3>Heads</h3>
            <ol id="head-tally" />
          </div>
          <div className={`tail count`}>
            <h3>Tails</h3>
            <ol id="tail-tally" />
          </div>
        </div>
        <div className="cointainer">
          <div className="coin">
            <Coin
              side={side}
              flipping={flipping}
              setSide={setSide}
              setFlipping={setFlipping}
              onFinish={handleFinish}
            />
          </div>
          <div
            className={`flip-btn ${flipping ? "disabled" : ""}`}
            onClick={handleFlip}
            role="button">
            <p className="flip-btn-lbl">
              {flipping ? "Flipping..." : "Flip Coin"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
