'use client';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

interface SubNavLink {
    title: string;
    url: string;
}

interface MobNav {
    title: string;
    url: string;
    subNavLinks: SubNavLink[];
}

const mobileNav: MobNav[] = [
    { title: "About", url: "", subNavLinks: [{ title: "Volunteer", url: "" }, { title: "Meet the Team", url: "" }, { title: "Our Story", url: "" }] },
    { title: "Services", url: "", subNavLinks: [{ title: "Health & Wellness", url: "" }, { title: "Outreach", url: "" }, { title: "Upskilling and Courses", url: "" }] },
    { title: "Offerings", url: "", subNavLinks: [{ title: "News", url: "" }, { title: "Support Groups", url: "" }, { title: "Support NCSG", url: "" }] },
];

function MobileNav() {
    const {
        toggleMenu,
        setToggleMenu,
        openIndex,
        showBorder,
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
                <div className={`flex flex-col items-end justify-start h-fit mobile-nav ${toggleMenu ? "active" : ""} ${showBorder ? "show-border" : ""}`}>
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
                                <div className="pl-4 mt-2 transition-all duration-300 ease-out">
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
                                <span className="hover:text-gray-300 transition-colors duration-300 bg-transparent">Take Action</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileNav;
