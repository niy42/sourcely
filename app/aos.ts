// aos.tsx or aos.js
'use client'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect } from 'react';

export default function AosInitializer() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
            once: false, // Whether animations should only happen once
            delay: 50
        });
    }, []);

    return null;
}
