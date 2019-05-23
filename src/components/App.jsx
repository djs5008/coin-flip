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
  heads: 0,
  tails: 0,
};

const App = () => {
  const [ side, setSide ] = useState(defaultState.side);
  const [ flipping, setFlipping ] = useState(defaultState.flipping);
  const [ tails, setTails ] = useState(defaultState.tails);
  const [ heads, setHeads ] = useState(defaultState.heads);

  const handleFlip = () => {
    if (!flipping) {
      setFlipping(true);
    }
  };

  const handleFinish = () => {
    switch (side) {
      case CoinSide.HEADS:
        setHeads(heads + 1);
        break;
      case CoinSide.TAILS:
        setTails(tails + 1);
        break;
      default: /* how..? */ break;
    }
  };

  return (
    <div className="App">
      <div className="body">
        <div className="coin">
          <Coin side={side} flipping={flipping} setSide={setSide} setFlipping={setFlipping} onFinish={handleFinish} />
        </div>
        <div className={`flip-btn ${flipping ? "disabled" : ""}`} onClick={handleFlip} role="button" >
          <p className="flip-btn-lbl">{(flipping) ? "Flipping..." : "Flip Coin"}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
