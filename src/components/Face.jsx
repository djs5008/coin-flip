import React from "react";
import "../styles/Face.css";

const Face = (props) => {

    const { image, flipping, onSideFlip, currentSide } = props;

    return (
        <div className="Face">
            <img src={image} className={`${currentSide ? 'active' : ''} ${flipping ? "flipping" : ''}`} alt="coin face" width="200" onAnimationIteration={onSideFlip} />
        </div>
    );
};

export default Face;