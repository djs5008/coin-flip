import React from 'react';
import '../styles/Coin.css';

const Coin = (props) => {
    const { side, flipping } = props;
    const { setSide } = props;
    const otherSide = (side === "Heads") ? "Tails" : "Heads";

    const handleAnimationIteration = () => {
        console.log('flipped');
        setSide(otherSide);
    };

    return (
        <div className="Coin">
            <img className={`coin-1 ${flipping ? "flipping" : ""}`} src={`${side}.png`} alt="coin" width="200" onAnimationIteration={handleAnimationIteration} />
            <img className={`coin-2 ${flipping ? "flipping" : ""}`} src={`${otherSide}.png`} alt="coin" width="200" onAnimationIteration={handleAnimationIteration} />
        </div>
    );
};

export default Coin;