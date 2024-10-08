'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { laptopData } from '@/constants';
import ArrowRight from './ArrowRight';
import ArrowLeft from './ArrowLeft';

export default function ProductGrid() {
    const {
        theme,
        currentLaptopIndex,
        currentImageIndex,
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
    const handleMouseEnter = (index: any) => {
        setHoverStates(prev => prev.map((hover, i) => i === index ? !hover : hover));
    };

    const handleMouseLeave = (index: any) => {
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
        <div data-aos="flip-left" className="overflow-hidden mx-auto md:grid hidden gap-6 sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-2 xl:max-w-full xl:grid-cols-4 lg:gap-6 py-12">
            {/* Product Card 1 */}
            <div data-aos="flip-right" className="relative md:h-[480px] lg:h-[600px] xl:h-[420px] rounded-lg shadow-xl group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                </Link>

                {currentLaptop && (
                    <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg group hover:shadow-xl">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View Product</span>
                        </Link>
                        <div className="absolute w-full h-full">
                            {currentLaptop.images.map((img, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={img.src}
                                    alt={`${currentLaptop.name} image ${imgIndex + 1}`}
                                    className={`absolute inset-0 mx-auto aspect-auto rounded-t-lg object-cover transition-transform transform duration-300 ${imgIndex === currentImageIndexes[0] ? 'translate-x-0 z-10' : '-translate-x-full z-0'}`}
                                    style={{ transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
                                />
                            ))}
                        </div>
                        <div className="flex w-full flex-col space-y-2 absolute bottom-0 p-4 bg-background overflow-hidden">
                            <h3 className="text-lg font-semibold md:text-xl">{currentLaptop.name}</h3>
                            <p className="text-sm text-muted-foreground">{currentLaptop.desc}</p>
                            <h4 className="text-base font-semibold md:text-lg">{currentLaptop.price}</h4>
                        </div>
                    </div>
                )}
                <button className={`absolute z-40 bottom-6 lg:bottom-6 right-4 md:right-6 lg:right-6 translate-y-[-50%] ${theme === 'dark' ? "text-white stroke-white" : "text-black stroke-black"} ${hoverStates[0] ? 'over' : 'out'}`} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)} onClick={() => handleLaptopRightArrow()}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237 237" className="w-16 h-16">
                        <circle className="st0 circle" cx="118.5" cy="118.5" r="66" />
                        <circle className="st0 circle2" cx="118.5" cy="118.5" r="100" />
                        <polygon className="st0 arrow" points="96.5,144.2 147.8,118.5 96.5,92.8 105.1,118.5" />
                    </svg>
                </button>
                <ArrowRight cardIndex={0} handleRightArrow={handleRightArrow} />
                <ArrowLeft cardIndex={0} handleLeftArrow={handleLeftArrow} />
            </div>

            {/* Repeat for other product cards, updating indexes accordingly */}

            {/* Product Card 2 */}
            <div data-aos="fade-right" className="relative md:h-[480px] lg:h-[600px] xl:h-[420px] rounded-lg shadow-xl group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                </Link>

                {currentLaptop && (
                    <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg group hover:shadow-xl">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View Product</span>
                        </Link>
                        <div className="absolute w-full h-full">
                            {currentLaptop.images.map((img, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={img.src}
                                    alt={`${currentLaptop.name} image ${imgIndex + 1}`}
                                    className={`absolute inset-0 mx-auto aspect-auto rounded-t-lg object-cover transition-transform transform duration-300 
                        ${imgIndex === currentImageIndexes[1] ? 'translate-y-0 z-10 opacity-100 visible' : 'translate-y-full z-0 opacity-0 invisible'}`}
                                    style={{ transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out, visibility 0.5s ease-in-out' }}
                                />
                            ))}
                        </div>
                        {/*Description section*/}
                        <div className="flex w-full flex-col space-y-2 absolute bottom-0 p-4 bg-background">
                            <h3 className="text-lg font-semibold md:text-xl">{currentLaptop.name}</h3>
                            <p className="text-sm text-muted-foreground">{currentLaptop.desc}</p>
                            <h4 className="text-base font-semibold md:text-lg">{currentLaptop.price}</h4>
                        </div>
                    </div>
                )}

                <button className={`absolute z-40 bottom-6 lg:bottom-6 right-4 md:right-6 lg:right-6 translate-y-[-50%] ${theme === 'dark' ? "text-white stroke-white" : "text-black stroke-black"} ${hoverStates[1] ? 'over' : 'out'}`} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)} onClick={() => handleLaptopRightArrow()}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237 237" className="w-16 h-16">
                        <circle className="st0 circle" cx="118.5" cy="118.5" r="66" />
                        <circle className="st0 circle2" cx="118.5" cy="118.5" r="100" />
                        <polygon className="st0 arrow" points="96.5,144.2 147.8,118.5 96.5,92.8 105.1,118.5" />
                    </svg>
                </button>
                <ArrowRight cardIndex={1} handleRightArrow={handleRightArrow} />
                <ArrowLeft cardIndex={1} handleLeftArrow={handleLeftArrow} />
            </div>

            {/* Product Card 3 */}
            <div data-aos="fade-left" className="relative md:h-[480px] lg:h-[600px] xl:h-[420px] rounded-lg shadow-xl group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                </Link>

                {currentLaptop && (
                    <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg group hover:shadow-xl">
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
                        <div className="flex w-full flex-col space-y-2 absolute bottom-0 p-4 bg-background overflow-hidden">
                            <h3 className="text-lg font-semibold md:text-xl">{currentLaptop.name}</h3>
                            <p className="text-sm text-muted-foreground">{currentLaptop.desc}</p>
                            <h4 className="text-base font-semibold md:text-lg">{currentLaptop.price}</h4>
                        </div>
                    </div>
                )}
                <button className={`absolute z-40 bottom-6 lg:bottom-6 right-4 md:right-6 lg:right-4 translate-y-[-50%] ${theme === 'dark' ? "text-white stroke-white" : "text-black stroke-black"} ${hoverStates[2] ? 'over' : 'out'}`} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)} onClick={() => handleLaptopRightArrow()}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237 237" className="w-16 h-16">
                        <circle className="st0 circle" cx="118.5" cy="118.5" r="66" />
                        <circle className="st0 circle2" cx="118.5" cy="118.5" r="100" />
                        <polygon className="st0 arrow" points="96.5,144.2 147.8,118.5 96.5,92.8 105.1,118.5" />
                    </svg>
                </button>
                <ArrowRight cardIndex={2} handleRightArrow={handleRightArrow} />
                <ArrowLeft cardIndex={2} handleLeftArrow={handleLeftArrow} />
            </div>

            {/* Product Card 4 */}
            <div data-aos="flip-right" className="relative md:h-[480px] lg:h-[600px] xl:h-[420px] rounded-lg shadow-xl group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                </Link>

                {currentLaptop && (
                    <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg group hover:shadow-xl">
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
                        <div className="flex w-full flex-col space-y-2 absolute bottom-0 p-4 bg-background overflow-hidden">
                            <h3 className="text-lg font-semibold md:text-xl">{currentLaptop.name}</h3>
                            <p className="text-sm text-muted-foreground">{currentLaptop.desc}</p>
                            <h4 className="text-base font-semibold md:text-lg">{currentLaptop.price}</h4>
                        </div>
                    </div>
                )}
                <button className={`absolute z-40 bottom-6 lg:bottom-6 right-6 md:right-6 lg:right-6 translate-y-[-50%] ${theme === 'dark' ? "text-white stroke-white" : "text-black stroke-black"} ${hoverStates[3] ? 'over' : 'out'}`} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)} onClick={() => handleLaptopRightArrow()}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237 237" className="w-16 h-16">
                        <circle className="st0 circle" cx="118.5" cy="118.5" r="66" />
                        <circle className="st0 circle2" cx="118.5" cy="118.5" r="100" />
                        <polygon className="st0 arrow" points="96.5,144.2 147.8,118.5 96.5,92.8 105.1,118.5" />
                    </svg>
                </button>
                <ArrowRight cardIndex={3} handleRightArrow={handleRightArrow} />
                <ArrowLeft cardIndex={3} handleLeftArrow={handleLeftArrow} />
            </div>
        </div>
    );

}
