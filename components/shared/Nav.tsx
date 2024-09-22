import Link from 'next/link';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import { Navlinks, navlinksfirst, navlinkssecond, navlinksthird } from '@/constants';
import { useState, useRef } from 'react';

// Define a type for the Dropdown component props
interface DropdownProps {
    title: string;
    links: Navlinks[];
}

function Nav() {
    return (
        <nav className="relative lg:w-full max-md:w-[20rem] flex items-center gap-[2rem] justify-center z-30">
            <Link href="" className='whitespace-nowrap hover:text-gray-300 transition-colors duration-300'>
                Home
            </Link>

            {/* Dropdowns */}
            <Dropdown title="Laptops" links={navlinksfirst} />
            <Dropdown title="Wearables" links={navlinkssecond} />
            <Dropdown title="Accessories" links={navlinksthird} />
        </nav>
    );
}

function Dropdown({ title, links }: DropdownProps) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const linkRef = useRef<HTMLAnchorElement>(null);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                ref={linkRef}
                href=""
                className="flex items-center gap-[0.6rem] hover:text-gray-300 transition-colors duration-300 whitespace-nowrap"
            >
                {title}
                <span className="inline-flex items-center">
                    <FaSortDown className={dropdownVisible ? "hidden" : "block"} />
                    <FaSortUp className={dropdownVisible ? "block" : "hidden"} />
                </span>
            </Link>
            {dropdownVisible && linkRef.current && (
                <div
                    ref={dropdownRef}
                    className={`bg-[#303030] rounded-lg shadow-lg transition-all duration-300 ease-out`}
                    style={{
                        top: `${linkRef.current.getBoundingClientRect().top + window.scrollY + 150}px`, // Align directly below the link
                        left: `${linkRef.current.getBoundingClientRect().left}px`, // Align to the left of the link
                        width: `${linkRef.current.offsetWidth}px` // Set the width to match the link width
                    }}
                >
                    {links.map(({ name, url, classname }, index) => (
                        <Link
                            href={url}
                            key={index + name}
                            className={`${classname} text-white hover:text-gray-300 transition-colors duration-300 block w-full px-4 py-2 whitespace-nowrap`}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Nav;
