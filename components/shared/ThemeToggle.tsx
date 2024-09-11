import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'; // Use any icons you prefer

const ThemeToggle = ({ currentTheme, setTheme }: any) => {
    const isDarkMode = currentTheme === 'dark';

    const handleToggle = () => {
        setTheme(isDarkMode ? 'light' : 'dark');
    };

    return (
        <button
            onClick={handleToggle}
            className={`flex items-center justify-center p-2 rounded-full transition-colors duration-300 
        ${isDarkMode ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-yellow-300 text-gray-700 hover:bg-yellow-200'}`}
            aria-label="Toggle theme"
        >
            {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
    );
};

export default ThemeToggle;
