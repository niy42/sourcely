'use client';

import React, { createContext, useState, ReactNode, useContext, useEffect, SetStateAction, Dispatch } from 'react';
import { laptopData } from '@/constants';

interface ThemeContextProps {
    currentLaptopIndex: number;
    setCurrentLaptopIndex: Dispatch<SetStateAction<number>>;
    currentImageIndex: number;
    setCurrentImageIndex: Dispatch<SetStateAction<number>>;
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    toggleMenu: boolean;
    setToggleMenu: Dispatch<SetStateAction<boolean>>;
    openIndex: number | null;
    setOpenIndex: Dispatch<SetStateAction<number | null>>;
    showBorder: boolean;
    setShowBorder: Dispatch<SetStateAction<boolean>>;
    handleToggleMenu: (index: number) => void; // Fixed type
}

const ThemeContext = createContext<ThemeContextProps>({
    currentLaptopIndex: 0,
    setCurrentLaptopIndex: () => { },
    currentImageIndex: 0,
    setCurrentImageIndex: () => { },
    theme: 'dark',
    setTheme: () => { },
    toggleMenu: false,
    setToggleMenu: () => { },
    openIndex: null, // Fixed initial value
    setOpenIndex: () => { },
    showBorder: false,
    setShowBorder: () => { },
    handleToggleMenu: () => { } // Fixed type
});

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>('dark');
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [currentLaptopIndex, setCurrentLaptopIndex] = useState<number>(0);
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [showBorder, setShowBorder] = useState<boolean>(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % laptopData[currentLaptopIndex].images.length);
        }, 6000);

        return () => clearInterval(imageInterval);
    }, [currentLaptopIndex]);

    useEffect(() => {
        const laptopInterval = setInterval(() => {
            setCurrentLaptopIndex((prev) => (prev + 1) % laptopData.length);
        }, 15000);

        return () => clearInterval(laptopInterval);
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Handle toggle menu
    const handleToggleMenu = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <ThemeContext.Provider value={{
            openIndex,
            setOpenIndex,
            toggleMenu,
            setToggleMenu,
            currentLaptopIndex,
            setCurrentLaptopIndex,
            currentImageIndex,
            setCurrentImageIndex,
            theme,
            setTheme,
            showBorder,
            setShowBorder,
            handleToggleMenu
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export { ThemeProvider, useTheme };
