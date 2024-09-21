import { ThemeProvider } from '@/context/ThemeContext'; // Adjust the import path as needed
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import AosInitializer from '@/app/aos';
import Header from '@/components/shared/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sourcely",
  description: "",
};

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
        className={`${cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )} min-h-[100dvh] flex flex-col w-full max-w-[100%] xl:max-w-[1470px] 2xl:max-w-[1600px] relative`}
      >
        <AosInitializer /> {/* Initialize AOS once*/}

        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
