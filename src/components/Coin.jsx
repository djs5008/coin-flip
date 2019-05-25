import React from "react";
import "../styles/Coin.css";
import Face from "./Face";

const Coin = (props) => {
  const { startingSide, flipping, onFinish } = props;
  const otherSide = startingSide === "Heads" ? "Tails" : "Heads";

  let totalRotation = Math.floor(Math.random() * 900) + 3600;
  totalRotation -= totalRotation % 180;

  const handleCoinStop = () => {
    if (flipping) {
      const totalFlips = totalRotation / 180;
      const flipCountEven = totalFlips % 2 === 0;
      onFinish(flipCountEven ? startingSide : otherSide);
    }
  };

  return (
    <div className="Coin">
      <Face
        image="img/Heads.png"
        side="heads"
        startingSide={startingSide === "Heads"}
        flipping={flipping}
        onCoinStop={handleCoinStop}
        totalRotation={totalRotation}
      />
      <Face
        image="img/Tails.png"
        side="tails"
        startingSide={startingSide === "Tails"}
        flipping={flipping}
        onCoinStop={handleCoinStop}
        totalRotation={totalRotation}
      />
    </div>
  );
};

export default Coin;
