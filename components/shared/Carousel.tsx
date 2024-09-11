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
        <div className="relative max-w-full h-full overflow-hidden">
            <div className="relative w-full h-full">
                {images.map(({ image, title }, index) => (
                    <div
                        className={`absolute transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'} w-full h-full`}
                        key={index}
                    >
                        <p className={`absolute inset-0 flex items-center justify-center text-center text-4xl font-extralight ${oswald.className} bg-black bg-opacity-50 text-white p-4 rounded-full`}>
                        </p>
                        <Image
                            src={image}
                            alt="carousel image"
                            layout="fill"
                            objectFit="contain"
                            className="w-full h-full rounded-[20px]"
                        />
                        <div className="absolute bottom-0 left-0 flex w-full bg-opacity-40 items-end p-4 text-xl font-bold text-white">
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
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full"
            >
                <MdOutlineArrowCircleLeft className="h-10 w-10" />
            </button>
            <button
                onClick={rightSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full"
            >
                <MdOutlineArrowCircleRight className="h-10 w-10" />
            </button>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full mx-1 cursor-pointer transition-transform ease-linear duration-300 ${index === currentIndex ? 'bg-blue-800' : 'bg-gray-200 hover:bg-gray-500 '}`}
                        onClick={() => setCurrentIndex(index)}
                    />

                ))}
            </div>
        </div>
    );
}
