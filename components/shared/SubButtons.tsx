import { useTheme } from 'next-themes';

const SubButton = ({ type, children }: { type: any, children: React.ReactNode }) => {
    const { theme } = useTheme(); // Get the current theme

    return (
        <button
            type={type}
            className={`px-4 py-2 text-white font-bold rounded-md transition-colors duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-black'
                }`}
        >
            {children}
        </button>
    );
};

export default SubButton;