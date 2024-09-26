import { useTheme } from '@/context/ThemeContext';

const SubButton = ({ type, children }: { type: any, children: React.ReactNode }) => {
    const { theme } = useTheme(); // Get the current theme

    return (
        <button
            type={type}
            className={`px-4 py-2 font-bold rounded-md transition-colors duration-300 outline-none border-none ${theme === 'light' ? 'bg-white' : 'bg-black'
                }`}
        >
            {children}
        </button>
    );
};

export default SubButton;