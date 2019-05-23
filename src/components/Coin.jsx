import React, { useState } from "react";
import "../styles/Coin.css";
import Face from "./Face";

const MAX_SPEED = 0.8;
const DEFAULT_SPEED = Math.random() % (MAX_SPEED / 2);
const DECAY = (speed) => speed / 5;

const Coin = (props) => {
    const [ speed, setSpeed ] = useState(DEFAULT_SPEED);
    const { 
        side, 
        setSide, 
        flipping, 
        setFlipping
    } = props;
    const otherSide = (side === "Heads") ? "Tails" : "Heads";

    const flip = () => {
        setSide(otherSide);
    };

    const handleSideFlip = () => {
        flip();
        if (speed >= 0.8) {
            setFlipping(false);
            setSpeed(DEFAULT_SPEED);
        } else {
            setSpeed(speed + DECAY(speed));
        }
    };

    console.clear();
    console.info(`SPEED: ${speed}`);

    return (
        <div className="Coin">
            <Face image="Heads.png" speed={speed} currentSide={ side === "Heads" } flipping={ side === "Heads" && flipping } onSideFlip={handleSideFlip} />
            <Face image="Tails.png" speed={speed} currentSide={ side === "Tails" } flipping={ side === "Tails" && flipping } onSideFlip={handleSideFlip} />
        </div>
    );
};

export default Coin;