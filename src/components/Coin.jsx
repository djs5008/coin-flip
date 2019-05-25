import React, { useState } from "react";
import "../styles/Coin.css";
import Face from "./Face";


const MAX_SPEED = 0.6;
const DECAY = (speed) => speed / (Math.floor((Math.random() * 5)) + 3);

const defaultState = {
  defaultSpeed: Math.random() % (MAX_SPEED / 2)
};

const Coin = (props) => {
  const [ speed, setSpeed ] = useState(defaultState.defaultSpeed);
  const { 
    side, 
    setSide, 
    flipping, 
    setFlipping,
    onFinish,
  } = props;
  const otherSide = (side === "Heads") ? "Tails" : "Heads";

  const flip = () => {
    setSide(otherSide);
  };

  const handleSideFlip = () => {
    flip();
    if (speed >= 0.8) {
      setFlipping(false);
      setSpeed(defaultState.defaultSpeed);
      onFinish(otherSide);
    } else {
      setSpeed(speed + DECAY(speed));
    }
  };

  console.clear();
  console.info(`SPEED: ${speed}`);

  return (
    <div className="Coin">
      <Face image="img/Heads.png" speed={speed} currentSide={ side === "Heads" } flipping={ side === "Heads" && flipping } onSideFlip={handleSideFlip} />
      <Face image="img/Tails.png" speed={speed} currentSide={ side === "Tails" } flipping={ side === "Tails" && flipping } onSideFlip={handleSideFlip} />
    </div>
  );
};

export default Coin;