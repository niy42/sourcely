// app/layout.tsx
import { ThemeProvider } from '@/context/ThemeContext'; // Adjust the import path as needed
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import AosInitializer from '@/app/aos';

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <AosInitializer /> {/* Initialize AOS once*/}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
