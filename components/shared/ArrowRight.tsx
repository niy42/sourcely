'use client'

interface ArrowRightProps {
    cardIndex: number;
    handleRightArrow: (cardIndex: number) => void;
}

const ArrowRight = ({ cardIndex, handleRightArrow }: ArrowRightProps) => {
    return (
        <button
            className="arrow-right"
            onClick={() => handleRightArrow(cardIndex)}
        >

            <div className="arrow-right-part" ></div>
            <div className="arrow-right-part"></div>

        </button>
    );
};

export default ArrowRight;
