import React, { useState } from "react";
import "../styles/Face.css";

const FlipDirection = {
  LEFT: "left",
  RIGHT: "right",
};

const Face = (props) => {
  const { image, flipping, onSideFlip, currentSide, speed } = props;
  const [ dir, setDir ] = useState((currentSide) ? FlipDirection.RIGHT : FlipDirection.LEFT);

  const handleAnimIteration = () => {
    setDir(dir === FlipDirection.LEFT ? FlipDirection.RIGHT : FlipDirection.LEFT);
    onSideFlip();
  };

  return (
    <div className="Face">
      <img
        src={image}
        alt="coin face"
        width="200"
        className={`
          ${currentSide ? "active" : ""} 
          ${flipping ? `flipping-${dir}` : ""}
        `}
        onAnimationIteration={handleAnimIteration}
        style={{
          animationDuration: `${speed}s`,
          transition: `transform ${speed * 6}s ease-out`,
        }}
      />
    </div>
  );
};

export default Face;
