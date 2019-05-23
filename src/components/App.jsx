import React, { useState } from "react";
import "../styles/App.css";
import Coin from "./Coin";

const CoinSide = {
  HEADS: "Heads", 
  TAILS: "Tails"
};

const defaultState = {
  flipping: false,
  side: (Math.random() < 0.5) ? CoinSide.HEADS : CoinSide.TAILS,
};

const App = () => {
  const [ side, setSide ] = useState(defaultState.side);
  const [ flipping, setFlipping ] = useState(defaultState.flipping);

  const handleFlip = () => {
    if (!flipping) {
      setFlipping(true);
    }
  };

  return (
    <div className="App">
      <div className="body">
        <div className="coin">
          <Coin side={side} flipping={flipping} setSide={setSide} setFlipping={setFlipping} />
        </div>
        <div className={`flip-btn ${flipping ? "disabled" : ""}`} onClick={handleFlip} role="button" >
          <p className="flip-btn-lbl">{(flipping) ? "Flipping..." : "Flip Coin"}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
