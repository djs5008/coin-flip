import React from "react";
import "../styles/Face.css";

const Face = (props) => {

  const { 
    image, 
    flipping, 
    onSideFlip, 
    currentSide,
    speed,
  } = props;

  return (
    <div className="Face">
      <img 
        src={image} 
        alt="coin face" 
        width="200" 
        className={`${currentSide ? "active" : ""} ${flipping ? "flipping" : ""}`} 
        onAnimationIteration={onSideFlip} 
        style={{ 
            animationDuration: `${speed}s`, 
            transition: `transform ${speed*2}s ease-out` 
        }} 
      />
    </div>
  );
};

export default Face;