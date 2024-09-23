"use client"
import { useState } from "react";

export function Practice() {
    const Data = [];
    const [hoverStates, setHoverStates] = useState(Array(4).fill(false));
    const [moveRight, setMoveRight] = useState(0);
    const handleRightArrow = () => {
        setMoveRight(prev => (prev + 1) % Data.length);
    }
    const onMouseEnter = function (index: number) {
        setHoverStates(prev => prev.map((hover, i) => i === index ? !hover : hover))
    }
    const onMouseLeave = function (index: number) {
        setHoverStates(prev => prev.map((hover, i) => i === index ? !hover : hover))
    }
}