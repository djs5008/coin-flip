import React, { useState } from "react";
import "../styles/Coin.css";
import Face from "./Face";

const Coin = (props) => {
    
    const { side, setSide, flipping, setFlipping } = props;
    const otherSide = (side === "Heads") ? "Tails" : "Heads";

    const handleSideFlip = () => {
        setSide(otherSide);
    };

    return (
        <div className="Coin">
            <Face image="Heads.png" currentSide={ side === "Heads" } flipping={ side === "Heads" && flipping } onSideFlip={handleSideFlip} />
            <Face image="Tails.png" currentSide={ side === "Tails" } flipping={ side === "Tails" && flipping } onSideFlip={handleSideFlip} />
        </div>
    );
};

export default Coin;