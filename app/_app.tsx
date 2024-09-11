// _app.js
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css'; // Import global styles

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
