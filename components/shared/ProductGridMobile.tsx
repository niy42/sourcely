'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { laptopData } from '@/constants';

export default function ProductGridMobile() {
    const {
        theme,
        currentLaptopIndex,
        currentImageIndex
    } = useTheme();

    // Ensure the component updates when the laptop index changes
    useEffect(() => {
        console.log(`Current laptop index: ${currentLaptopIndex}, Current image index: ${currentImageIndex}`);
    }, [currentLaptopIndex, currentImageIndex]);

    // Get the current laptop data
    const currentLaptop = laptopData[currentLaptopIndex];

    return (
        <div className="overflow-hidden mx-auto grid grid-rows-4 gap-8 justify-center max-w-md md:hidden">
            {/* Product Card 1 */}
            <div
                data-aos="fade-left"
                className={`relative ${theme === 'dark' ? 'border-gray-800 border' : ''} overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2`}
            >
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
                <div className="p-4 bg-background">
                    <h3 className="text-lg font-semibold md:text-xl">Ergonomic Office Chair</h3>
                    <p className="text-sm text-muted-foreground">Comfortable and supportive chair for long workdays.</p>
                    <h4 className="text-base font-semibold md:text-lg">$249.99</h4>
                </div>
            </div>

            {/* Product Card 2 */}
            <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className={`relative ${theme === 'dark' ? 'border border-gray-800' : ''} overflow-hidden rounded-lg shadow-xl group hover:shadow-xl hover:-translate-y-2`}
            >
                <Link href="#" className="relative block z-10" prefetch={false}>
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
                                    className={`absolute inset-0 mx-auto aspect-square rounded-t-lg object-cover transition-transform transform duration-300 ${imgIndex === currentImageIndex ? 'translate-x-0 z-10' : 'translate-x-full z-0'}`}
                                    style={{ transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col space-y-2 absolute bottom-0 p-4 bg-background">
                            <div className="relative top-0 sm:-top-1 md:top-0">
                                <h3 className="text-lg font-semibold md:text-xl">{currentLaptop.name}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{currentLaptop.desc}</p>
                                <h4 className="text-base font-semibold md:text-lg">${currentLaptop.price}</h4>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Product Card 3 */}
            <div
                data-aos="fade-down"
                className={`relative ${theme === 'dark' ? 'border border-gray-800' : ''} overflow-hidden rounded-lg shadow-xl group hover:shadow-xl hover:-translate-y-2`}
            >
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
                                    className={`absolute inset-0 mx-auto aspect-auto rounded-t-lg object-cover transition-transform transform duration-300 ${imgIndex === currentImageIndex ? 'scale-100 z-10' : 'scale-0 z-0'}`}
                                    style={{ transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
                                />
                            ))}
                        </div>
                        <div className="flex w-full flex-col space-y-2 absolute bottom-0 p-4 bg-background">
                            <div className="relative top-0 sm:-top-1 md:top-0">
                                <h3 className="text-lg font-semibold md:text-xl">{currentLaptop.name}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{currentLaptop.desc}</p>
                                <h4 className="text-base font-semibold md:text-lg">${currentLaptop.price}</h4>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Product Card 4 */}
            <div
                data-aos="fade-up"
                className={`relative ${theme === 'dark' ? 'border border-gray-800' : ''} overflow-hidden rounded-lg shadow-xl group hover:shadow-xl hover:-translate-y-2`}
            >
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
                                    className={`absolute inset-0 mx-auto aspect-auto rounded-t-lg object-cover transition-transform transform duration-300 ${imgIndex === currentImageIndex ? 'translate-y-0 z-10 opacity-100' : '-translate-y-1/2 opacity-0 z-0'}`}
                                    style={{ transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
                                />
                            ))}
                        </div>
                        <div className="flex w-full flex-col space-y-2 absolute bottom-0 p-4 bg-background">
                            <div className="relative top-0 sm:-top-1 md:top-0">
                                <h3 className="text-lg font-semibold md:text-xl">{currentLaptop.name}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{currentLaptop.desc}</p>
                                <h4 className="text-base font-semibold md:text-lg">${currentLaptop.price}</h4>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div>{/*Empty div*/}</div>
        </div>
    );
}
