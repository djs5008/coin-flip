import React, { useLayoutEffect } from "react";
import "../styles/Face.css";

const Face = (props) => {
  const {
    image,
    flipping,
    onCoinStop,
    startingSide,
    side,
    totalRotation,
  } = props;

  useLayoutEffect(() => {
    const coinSide = document.getElementById(`coin-${side}`);
    coinSide.style.setProperty("--total-rotation", `${totalRotation}deg`);
    coinSide.style.transform = `rotateY(${startingSide ? "0" : "180"}deg)`;
  });

  return (
    <div className="Face">
      <img
        id={`coin-${side}`}
        src={image}
        alt={`${side}`}
        width="200"
        className={`
          ${startingSide ? "active" : ""}
          ${side}
          ${flipping ? "flipping" : ""}
        `}
        onAnimationEnd={onCoinStop}
      />
    </div>
  );
};

export default Face;
