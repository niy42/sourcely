'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { laptopData } from '@/constants';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

export default function ProductGrid() {
    const {
        theme,
        currentLaptopIndex,
        currentImageIndex,
        isTransitioning,
        handleLaptopRightArrow,
    } = useTheme();
    const [hoverStates, setHoverStates] = useState(Array(4).fill(false)); // Initialize hover state for 4 buttons
    const [currentImageIndexes, setCurrentImageIndexes] = useState(Array(laptopData.length).fill(0)); // State for image indexes

    // Ensure the component updates when the laptop index changes
    useEffect(() => {
        console.log(`Current laptop index: ${currentLaptopIndex}, Current image index: ${currentImageIndex}`);
    }, [currentLaptopIndex, currentImageIndex]);

    // Get the current laptop data
    const currentLaptop = laptopData[currentLaptopIndex];

    // Handle hover state change
    const handleTouchStart = (index: number) => {
        setHoverStates(prev => prev.map((hover, i) => i === index ? true : hover));
    };

    const handleTouchEnd = (index: number) => {
        setHoverStates(prev => prev.map((hover, i) => i === index ? false : hover));
    };

    const handleLeftArrow = (cardIndex: number) => {
        console.log(`cardIndex: ${cardIndex}`);
        console.log(`laptopData: ${JSON.stringify(laptopData)}`);

        if (cardIndex < 0 || cardIndex >= laptopData.length || !laptopData[cardIndex]?.images) {
            console.error(`Invalid cardIndex or images not defined: ${cardIndex}`);
            return;
        }

        setCurrentImageIndexes((prevIndexes) => {
            const newIndexes = [...prevIndexes];
            const currentImageCount = laptopData[cardIndex].images.length;

            // Decrement the index and wrap around if necessary
            newIndexes[cardIndex] = (newIndexes[cardIndex] - 1 + currentImageCount) % currentImageCount;
            return newIndexes;
        });
    };

    const handleRightArrow = (cardIndex: number) => {
        console.log(`cardIndex: ${cardIndex}`);
        console.log(`laptopData: ${JSON.stringify(laptopData)}`);

        if (cardIndex < 0 || cardIndex >= laptopData.length || !laptopData[cardIndex]?.images) {
            console.error(`Invalid cardIndex or images not defined: ${cardIndex}`);
            return;
        }

        setCurrentImageIndexes((prevIndexes) => {
            const newIndexes = [...prevIndexes];
            const currentImageCount = laptopData[cardIndex].images.length;

            newIndexes[cardIndex] = (newIndexes[cardIndex] + 1) % currentImageCount;
            return newIndexes;
        });
    };

    return (
        <div data-aos="zoom-in" className="overflow-hidden mx-auto grid grid-rows-4 gap-8 justify-center max-w-md md:hidden">
            {/* Product Card 1 */}
            <div data-aos="fade-left" className={`relative ${theme === 'dark' ? 'border-gray-800 border' : ''} rounded-lg md:h-72 lg:h-[326px] xl:h-auto shadow-lg group hover:shadow-xl hover:-translate-y-2`}>
                <Link href="#" className="relative block z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                </Link>
                <img
                    src="/placeholder.svg"
                    width="450"
                    height="450"
                    alt="Product 1"
                    className="mx-auto aspect-square overflow-hidden object-cover transition-opacity group-hover:opacity-50"
                />
                <div className="p-4 bg-background flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold md:text-xl">SuperG</h3>
                    <p className="text-sm text-muted-foreground">Category: Remote workers</p>
                    <h4 className="text-base font-semibold md:text-lg">highly efficient multitasker</h4>
                </div>
            </div>

            {/* Product Card 2 */}
            <div data-aos="fade-right" className={`relative ${theme === 'dark' ? 'border-none' : ''} overflow-hidden rounded-lg shadow-xl group hover:shadow-xl md:h-72 lg:h-[326px] xl:h-auto hover:-translate-y-2`}>
                <Link href="#" className="relative block z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                </Link>

                {currentLaptop && (
                    <div className={`relative h-full w-full transition-transform transform duration-75 ease-out overflow-hidden rounded-lg shadow-lg group hover:shadow-xl ${isTransitioning ? '' : ''}`}>
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View Product</span>
                        </Link>
                        <div className="absolute w-full h-full">
                            {currentLaptop.images.map((img, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={img.src}
                                    alt={`${currentLaptop.name} image ${imgIndex + 1}`}
                                    className={`absolute inset-0 mx-auto aspect-square rounded-t-lg object-cover transition-transform transform duration-300 ${imgIndex === currentImageIndexes[1] ? 'translate-x-0 z-10' : 'translate-x-full z-0'}`}
                                    style={{ transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
                                />
                            ))}
                        </div>
                        <div className="flex w-full flex-col space-y-2 absolute -bottom-1 p-4 bg-background">
                            <h3 className="text-lg font-semibold md:text-xl">{currentLaptop.name}</h3>
                            <p className="text-sm text-muted-foreground">{currentLaptop.desc}</p>
                            <h4 className="text-base font-semibold md:text-lg">{currentLaptop.price}</h4>
                        </div>
                    </div>
                )}
                <button
                    className={`absolute z-40 -bottom-1 right-4 translate-y-[-50%] 
        ${theme === 'dark' ? "text-white stroke-white" : "text-black stroke-black"}
        ${hoverStates[1] ? 'over' : 'out'}`}
                    onTouchStart={() => handleTouchStart(1)}
                    onTouchEnd={() => handleTouchEnd(1)}
                    onClick={() => handleLaptopRightArrow()} // Pass index to identify which card button was clicked
                >
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 237 237"
                        className="w-16 h-16" /* Adjust size here */
                        xmlSpace="preserve"
                    >
                        <style type="text/css">
                            {`
                .st0 {
                    fill: none;
                    stroke-width: 9;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                }
                .circle {
                    stroke-dashoffset: 415;
                    stroke-dasharray: 415;
                }
                button.over .circle {
                    stroke: #d75050;
                    stroke-dashoffset: 415;
                    stroke-dasharray: 415;
                    animation: dash 0.5s linear forwards;
                }
                button.over .arrow {
                    animation: arrow 0.5s ease-in-out infinite alternate;
                }
                @keyframes dash {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
                @keyframes arrow {
                    to {
                        transform: translateX(5px);
                    }
                }
                .circle2 {
                    stroke-dashoffset: 628.31;
                    stroke-dasharray: 628.31;
                }
                button.over .circle2 {
                    stroke-dashoffset: 628.31;
                    stroke-dasharray: 104.72;
                    animation: dash 2s linear infinite;
                }
                button.out .circle2 {
                    stroke-dashoffset: 628.31;
                    stroke-dasharray: 628.31;
                    animation: dash 1s linear;
                }
            `}
                        </style>
                        <circle className="st0 circle" cx="118.5" cy="118.5" r="66" />
                        <circle className="st0 circle2" cx="118.5" cy="118.5" r="100" />
                        <polygon className="st0 arrow" points="96.5,144.2 147.8,118.5 96.5,92.8 105.1,118.5" />
                    </svg>
                </button>
                <ArrowRight cardIndex={1} handleRightArrow={handleRightArrow} />
                <ArrowLeft cardIndex={1} handleLeftArrow={handleLeftArrow} />
            </div>

            {/* Product Card 3 */}
            <div data-aos="fade-down" className="relative md:h-72 lg:h-[326px] xl:h-auto overflow-hidden rounded-lg shadow-xl group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                </Link>

                {currentLaptop && (
                    <div className={`relative h-full w-full transition-transform transform duration-75 ease-out overflow-hidden rounded-lg shadow-lg group hover:shadow-xl ${isTransitioning ? '' : ''}`}>
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View Product</span>
                        </Link>
                        <div className="absolute w-full h-full">
                            {currentLaptop.images.map((img, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={img.src}
                                    alt={`${currentLaptop.name} image ${imgIndex + 1}`}
                                    className={`absolute inset-0 mx-auto aspect-auto rounded-t-lg object-cover transition-transform transform duration-300 ${imgIndex === currentImageIndexes[2] ? 'scale-100 z-10' : 'scale-0 z-0'}`}
                                    style={{ transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
                                />
                            ))}
                        </div>
                        <div className="flex w-full flex-col space-y-2 absolute -bottom-1 p-4 bg-background">
                            <h3 className="text-lg font-semibold md:text-xl">{currentLaptop.name}</h3>
                            <p className="text-sm text-muted-foreground">{currentLaptop.desc}</p>
                            <h4 className="text-base font-semibold md:text-lg">{currentLaptop.price}</h4>
                        </div>
                    </div>
                )}
                <button
                    className={`absolute z-40 -bottom-1 right-4 translate-y-[-50%] 
        ${theme === 'dark' ? "text-white stroke-white" : "text-black stroke-black"}
        ${hoverStates[2] ? 'over' : 'out'}`}
                    onTouchStart={() => handleTouchStart(2)}
                    onTouchEnd={() => handleTouchEnd(2)}
                    onClick={() => handleLaptopRightArrow()}
                >
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 237 237"
                        className="w-16 h-16" /* Adjust size here */
                        xmlSpace="preserve"
                    >
                        <style type="text/css">
                            {`
                .st0 {
                    fill: none;
                    stroke-width: 9;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                }
                .circle {
                    stroke-dashoffset: 415;
                    stroke-dasharray: 415;
                }
                button.over .circle {
                    stroke: #d75050;
                    stroke-dashoffset: 415;
                    stroke-dasharray: 415;
                    animation: dash 0.5s linear forwards;
                }
                button.over .arrow {
                    animation: arrow 0.5s ease-in-out infinite alternate;
                }
                @keyframes dash {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
                @keyframes arrow {
                    to {
                        transform: translateX(5px);
                    }
                }
                .circle2 {
                    stroke-dashoffset: 628.31;
                    stroke-dasharray: 628.31;
                }
                button.over .circle2 {
                    stroke-dashoffset: 628.31;
                    stroke-dasharray: 104.72;
                    animation: dash 2s linear infinite;
                }
                button.out .circle2 {
                    stroke-dashoffset: 628.31;
                    stroke-dasharray: 628.31;
                    animation: dash 1s linear;
                }
            `}
                        </style>
                        <circle className="st0 circle" cx="118.5" cy="118.5" r="66" />
                        <circle className="st0 circle2" cx="118.5" cy="118.5" r="100" />
                        <polygon className="st0 arrow" points="96.5,144.2 147.8,118.5 96.5,92.8 105.1,118.5" />
                    </svg>
                </button>
                <ArrowRight cardIndex={2} handleRightArrow={handleRightArrow} />
                <ArrowLeft cardIndex={2} handleLeftArrow={handleLeftArrow} />
            </div>

            {/* Product Card 4 */}

            <div data-aos="fade-up" className={`relative overflow-hidden md:h-72 lg:h-[326px] xl:h-auto rounded-lg shadow-xl group hover:shadow-xl hover:-translate-y-2 `}>
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                </Link>

                {currentLaptop && (
                    <div className={`relative h-full w-full transition-transform transform duration-75 ease-out overflow-hidden rounded-lg shadow-lg group hover:shadow-xl ${isTransitioning ? '' : ''}`}>
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View Product</span>
                        </Link>
                        <div className="absolute w-full h-full">
                            {currentLaptop.images.map((img, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={img.src}
                                    alt={`${currentLaptop.name} image ${imgIndex + 1}`}
                                    className={`absolute inset-0 mx-auto aspect-auto rounded-t-lg object-cover transition-transform transform duration-300 ${imgIndex === currentImageIndexes[3] ? 'translate-y-0 z-10 opacity-100' : '-translate-y-1/2 opacity-0 z-0'}`}
                                    style={{ transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
                                />
                            ))}
                        </div>
                        <div className="flex w-full flex-col space-y-2 absolute -bottom-1 p-4 bg-background">
                            <h3 className="text-lg font-semibold md:text-xl">{currentLaptop.name}</h3>
                            <p className="text-sm text-muted-foreground">{currentLaptop.desc}</p>
                            <h4 className="text-base font-semibold md:text-lg">{currentLaptop.price}</h4>
                        </div>
                    </div>
                )}
                <button
                    className={`absolute z-40 -bottom-1 right-4 translate-y-[-50%] 
        ${theme === 'dark' ? "text-white stroke-white" : "text-black stroke-black"}
        ${hoverStates[3] ? 'over' : 'out'}`}
                    onTouchStart={() => handleTouchStart(3)}
                    onTouchEnd={() => handleTouchEnd(3)}
                    onClick={() => handleLaptopRightArrow()}
                >
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 237 237"
                        className="w-16 h-16" /* Adjust size here */
                        xmlSpace="preserve"
                    >
                        <style type="text/css">
                            {`
                .st0 {
                    fill: none;
                    stroke-width: 9;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                }
                .circle {
                    stroke-dashoffset: 415;
                    stroke-dasharray: 415;
                }
                button.over .circle {
                    stroke: #d75050;
                    stroke-dashoffset: 415;
                    stroke-dasharray: 415;
                    animation: dash 0.5s linear forwards;
                }
                button.over .arrow {
                    animation: arrow 0.5s ease-in-out infinite alternate;
                }
                @keyframes dash {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
                @keyframes arrow {
                    to {
                        transform: translateX(5px);
                    }
                }
                .circle2 {
                    stroke-dashoffset: 628.31;
                    stroke-dasharray: 628.31;
                }
                button.over .circle2 {
                    stroke-dashoffset: 628.31;
                    stroke-dasharray: 104.72;
                    animation: dash 2s linear infinite;
                }
                button.out .circle2 {
                    stroke-dashoffset: 628.31;
                    stroke-dasharray: 628.31;
                    animation: dash 1s linear;
                }
            `}
                        </style>
                        <circle className="st0 circle" cx="118.5" cy="118.5" r="66" />
                        <circle className="st0 circle2" cx="118.5" cy="118.5" r="100" />
                        <polygon className="st0 arrow" points="96.5,144.2 147.8,118.5 96.5,92.8 105.1,118.5" />
                    </svg>
                </button>
                <ArrowRight cardIndex={3} handleRightArrow={handleRightArrow} />
                <ArrowLeft cardIndex={3} handleLeftArrow={handleLeftArrow} />
            </div>

            <div></div>
        </div>
    );
}
