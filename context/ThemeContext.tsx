// ThemeContext.tsx
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
    isTransitioning: boolean;
    setIsTransitioning: Dispatch<SetStateAction<boolean>>;
    handleToggleMenu: (index: number) => void;
    handleLaptopRightArrow: () => void
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
    openIndex: null,
    setOpenIndex: () => { },
    showBorder: false,
    setShowBorder: () => { },
    isTransitioning: false,
    setIsTransitioning: () => { },
    handleToggleMenu: () => { },
    handleLaptopRightArrow: () => { }
});

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>('dark');
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [currentLaptopIndex, setCurrentLaptopIndex] = useState<number>(0);
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [showBorder, setShowBorder] = useState<boolean>(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % laptopData[currentLaptopIndex].images.length);
        }, 6000);

        return () => clearInterval(imageInterval);
    }, [currentLaptopIndex]);

    useEffect(() => {
        const laptopInterval = setInterval(() => {
            setIsTransitioning(true);
            setCurrentLaptopIndex((prev) => (prev + 1) % laptopData.length);
        }, 15000);

        return () => clearInterval(laptopInterval);
    }, []);

    useEffect(() => {
        if (isTransitioning) {
            const timeout = setTimeout(() => setIsTransitioning(false), 1000); // Adjust to match the duration of your CSS transition
            return () => clearTimeout(timeout);
        }
    }, [currentLaptopIndex, isTransitioning]);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleToggleMenu = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleLaptopRightArrow = () => {
        setIsTransitioning(true);
        setCurrentLaptopIndex((prev) => (prev + 1) % laptopData.length);
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
            isTransitioning,
            setIsTransitioning,
            handleToggleMenu,
            handleLaptopRightArrow
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
