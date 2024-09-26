// Import React and Framer Motion
import React from 'react';
import { motion } from 'framer-motion';
import { MdVerified } from 'react-icons/md';
import { useTheme } from '@/context/ThemeContext';

// Create the AnimatedIcon component
const AnimatedIcon = () => {
    const { theme } = useTheme();
    // Define animation variants
    const iconVariants = {
        hover: {
            scale: 1.2,
            color: '#f39c12',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 10,
            },
        },
        tap: {
            scale: 0.9,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 10,
            },
        },
        initial: {
            scale: 1,
            color: `${theme === 'dark' ? '#3b82f6' : '#1dc23e'}`,
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            whileTap="tap"  // Add this line for touch interaction
            variants={iconVariants}
            style={{ fontSize: '3rem' }}
        >
            <MdVerified />
        </motion.div>
    );
};

export default AnimatedIcon;
