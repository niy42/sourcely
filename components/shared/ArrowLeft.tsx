'use client'

interface ArrowLeftProps {
    cardIndex: number;
    handleLeftArrow: (cardIndex: number) => void;
}

const ArrowLeft = ({ cardIndex, handleLeftArrow }: ArrowLeftProps) => {
    return (
        <button
            className="arrow-left"
            onClick={() => handleLeftArrow(cardIndex)}
        >

            <div className="arrow-left-part" ></div>
            <div className="arrow-left-part"></div>

        </button>
    );
};

export default ArrowLeft;
