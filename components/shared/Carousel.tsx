import { imageProps } from "@/app/page";
import { Oswald } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from "react-icons/md";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function Carousel({ images }: imageProps): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const leftSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const rightSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(rightSlide, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative border-4 border-dashed border-zinc-700 rounded-md h-full overflow-hidden flex w-full justify-center items-center"> {/* Set height to ensure visibility */}
            <div className="relative w-full h-full">
                {images.map(({ image, title }, index) => (
                    <div
                        className={`absolute transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'} w-full h-full`}
                        key={index}
                    >
                        <Image
                            src={image}
                            alt={title} // Use title as alt text for better accessibility
                            fill // Adjust objectFit to cover the container
                            style={{ objectFit: "fill" }}
                            //width={1050}
                            //height={1050}
                            className="w-full h-full"
                        />
                        <div className="absolute hidden bottom-0 left-10 w-full bg-opacity-40 items-end p-4 text-xl font-bold text-white">
                            <Image
                                src={image}
                                alt="thumbnail"
                                className="w-12 h-12 md:w-20 md:h-20 bg-gray-600 rounded-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={leftSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent sm:bg-gray-700 text-gray-400 p-2 rounded-full"
            >
                <MdOutlineArrowCircleLeft className="h-10 w-10" />
            </button>
            <button
                onClick={rightSlide}
                className="absolute top-1/2 right-0 transform text-gray-400 -translate-y-1/2 bg-transparent sm:bg-gray-700 p-2 rounded-full"
            >
                <MdOutlineArrowCircleRight className="h-10 w-10" />
            </button>
            <div className="absolute z-10 bottom-1 left-1/2 transform -translate-x-1/2 flex">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full mx-1 cursor-pointer transition-transform ease-linear duration-300 ${index === currentIndex ? 'bg-blue-800' : 'bg-gray-200 hover:bg-gray-500'}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
