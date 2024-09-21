import { Navlinks, navlinksfirst, navlinkssecond, navlinksthird } from '@/constants';
import Link from 'next/link';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

// Define the props for the Dropdown component
interface DropdownProps {
    title: string;
    links: Navlinks[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, links }) => {
    const { theme } = useTheme();
    return (
        <div className="relative group">
            <Link
                href="#"
                className={`flex items-center ${theme === 'dark' ? 'hover:text-gray-300 ' : 'hover:text-gray-600 '} gap-[0.9rem] transition-colors duration-300 whitespace-nowrap`}
            >
                {title}
                <span>
                    <FaSortDown className="transition-transform group-hover:hidden" />
                    <FaSortUp className="transition-transform hidden group-hover:block" />
                </span>
            </Link>
            <div className={`absolute -left-4 top-[1rem] opacity-0 invisible group-hover:opacity-100 group-hover:translate-y-[2.5rem] group-hover:visible flex flex-col ${theme === 'dark' ? 'bg-[#303030]' : 'bg-[#f8eded]'} rounded-[5px] shadow-lg transition-all translate-y-0 transform duration-300 ease-out`}>
                {links.map(({ name, url, classname }, index) => (
                    <Link
                        href={url}
                        key={index + name}
                        className={`${classname} hover:text-gray-300 transition-colors duration-300 py-[0.5rem] px-[1rem] ${theme === 'dark' ? 'hover:text-gray-300 ' : 'hover:text-gray-600 '}`}
                    >
                        {name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

function Nav() {
    const { theme } = useTheme();
    return (
        <nav className="lg:w-full max-md:w-[20rem] flex items-center gap-[2rem] justify-center">
            <Link href={""} className={`whitespace-nowrap ${theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-700'} transition-colors duration-300`}>
                Home
            </Link>

            <Dropdown title="Gamers" links={navlinksfirst} />
            <Dropdown title="Developers" links={navlinkssecond} />
            <Dropdown title="Professionals" links={navlinksthird} />
        </nav>
    );
}

export default Nav;
