// Import React and Framer Motion
import React from 'react';
import { motion } from 'framer-motion';
import { FaBeer } from 'react-icons/fa';
import { PiArrowBendDownRightFill, PiArrowBendRightDownFill } from 'react-icons/pi';
import { MdVerified } from 'react-icons/md';


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
    initial: {
        scale: 1,
        color: '#3b82f6',
    },
};

// Create the AnimatedIcon component
const AnimatedIcon = () => {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            variants={iconVariants}
            style={{ fontSize: '3rem' }}
        >
            <MdVerified />
        </motion.div>
    );
};

export default AnimatedIcon;
