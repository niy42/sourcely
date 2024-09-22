'use client';

import { mobileNav } from '@/constants';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

function MobileNav() {
    const {
        toggleMenu,
        setToggleMenu,
        openIndex,
        showBorder,
        bg,
        handleToggleMenu
    } = useTheme();

    console.log({
        toggleMenu,
        setToggleMenu,
        openIndex,
        showBorder,
        handleToggleMenu
    });

    return (
        <>
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
                <div className="">
                    {toggleMenu ? (
                        <RiCloseLine
                            fontSize={24}
                            onClick={() => setToggleMenu(false)}
                            className="cursor-pointer"
                        />
                    ) : (
                        <RiMenu3Line
                            fontSize={24}
                            onClick={() => setToggleMenu(true)}
                            className="cursor-pointer"
                        />
                    )}
                </div>
                <div className={`flex flex-col items-end justify-start h-fit mobile-nav ${toggleMenu ? "active" : ""} ${bg ? "" : ""}`}>
                    <div className="py-3 px-5 hover:bg-gray-700 w-full rounded-xl">
                        <Link legacyBehavior href={'#'}>
                            <a className="block text-xs font-light hover:text-gray-400">Home</a>
                        </Link>
                    </div>
                    {mobileNav.map(({ title, url, subNavLinks }, index) => (
                        <div key={title + index} className="py-3 px-5 hover:bg-gray-700 w-full rounded-xl">
                            <a
                                onClick={() => handleToggleMenu(index)}
                                className="flex w-full justify-between items-center text-white hover:text-gray-300 transition-colors duration-300 whitespace-nowrap cursor-pointer"
                            >
                                <span className="block text-xs font-light hover:text-gray-400">{title}</span>
                                <span>
                                    {openIndex === index ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                                </span>
                            </a>
                            {openIndex === index && (
                                <div className="pl-4 mt-2 transition-all transform translate-y-2 duration-300 ease-out">
                                    {subNavLinks.map(({ title, url }, subIndex) => (
                                        <Link legacyBehavior key={title + subIndex} href={url || '#'}>
                                            <a className="block text-xs text-gray-300 hover:text-gray-100 py-1 whitespace-nowrap">{title}</a>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="py-3 px-5 w-full items-center justify-end cursor-pointer bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-light border border-gray-800 rounded-lg shadow-md transition-all duration-200">
                        <Link legacyBehavior href={'#'}>
                            <a className="block text-xs font-light hover:text-gray-400">
                                <span className="hover:text-gray-300 transition-colors duration-300 bg-transparent">Buying Guides</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileNav;
