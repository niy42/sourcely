'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import MobileNav from './MobileNav';
import { useTheme } from '@/context/ThemeContext';
import { Dancing_Script } from 'next/font/google';
import Link from 'next/link';
import Nav from './NavHover';

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const Header = () => {
    const { theme, setTheme, bg, setBg } = useTheme();

    return (
        <header className={`fixed w-full px-4 lg:px-6 h-14 flex items-center justify-between transition-colors duration-300 shadow z-20
      ${theme === 'dark' ? (bg ? 'bg-gray-900' : 'bg-zinc-600/30') : (bg ? 'bg-gray-300' : 'bg-[#f8eded]')}`}>
            <Link href="#" className="flex items-center space-x-0" prefetch={true}>
                <Source className="h-8 w-8" />
                <span className={`${dancingScript.className}`}>ourcely</span>
            </Link>
            <div className="flex-1 flex items-center justify-end ml-4 lg:ml-6 space-x-2">
                <nav className="hidden md:flex flex-[0.5] gap-2 sm:gap-4">
                    <Nav />
                    <div className="whitespace-nowrap py-2 px-4 w-full items-center justify-end cursor-pointer bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-light rounded-lg shadow-md transition-all duration-200">
                        <Link legacyBehavior href={'#'}>
                            <a className="block text-xs font-light hover:text-gray-400">
                                <span className="hover:text-gray-300 transition-colors duration-300 bg-transparent">Buying Guides</span>
                            </a>
                        </Link>
                    </div>
                </nav>
                <div className="flex justify-between items-center gap-3 md:gap-6">
                    <ThemeToggle currentTheme={theme} setTheme={setTheme} />
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

function Source(props: any) {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="97.000000pt" height="110.000000pt" viewBox="0 0 97.000000 110.000000"
            preserveAspectRatio="xMidYMid meet" {...props}>
            <g transform="translate(0.000000,110.000000) scale(0.100000,-0.100000)"
                fill="currentColor" stroke="none">
                <path d="M253 922 l-223 -127 0 -126 0 -126 227 -130 227 -130 85 49 c48 27
        89 53 93 56 4 4 -98 68 -227 142 -129 74 -234 137 -234 140 0 6 258 153 277
        158 6 2 111 -53 232 -122 121 -69 222 -126 225 -126 3 0 5 48 5 108 l-1 107
        -224 128 c-123 70 -227 127 -232 127 -4 0 -108 -58 -230 -128z"/>
                <path d="M392 727 c-51 -29 -92 -54 -92 -57 0 -3 69 -44 153 -92 83 -48 190
        -110 236 -136 l83 -49 -140 -82 c-77 -44 -144 -81 -148 -81 -3 0 -104 56 -224
        125 -119 69 -220 125 -224 125 -4 0 -5 -48 -4 -107 l3 -107 220 -128 c121 -70
        225 -128 230 -127 6 0 109 57 230 128 l220 128 3 124 3 124 -207 120 c-114 66
        -217 125 -229 132 -18 10 -33 5 -113 -40z"/>
            </g>
        </svg>
    );
}

export default Header;
