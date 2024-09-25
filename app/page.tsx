"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { useEffect, useState } from "react";
import SubButton from "@/components/shared/SubButtons";
import AnimatedIcon from "@/components/shared/AnimatedIcon";
import { Sacramento, Lobster_Two, Dancing_Script } from "next/font/google";
import axios from "axios";
import Image, { StaticImageData } from "next/image";

import { RiCloseLine, RiDoubleQuotesL, RiDoubleQuotesR, RiMenu3Line } from 'react-icons/ri'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import ProductGrid from "@/components/shared/ProductGrid";
import ProductGridMobile from "@/components/shared/ProductGridMobile";
import { useTheme } from "@/context/ThemeContext";
import TestIcon from "@/components/shared/MobileNav";
import MobileNav from "@/components/shared/MobileNav";
import ArrowRight from "@/components/shared/ArrowRight";
import ArrowLeft from "@/components/shared/ArrowLeft";
import Nav from "@/components/shared/Nav";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Props {
  image: StaticImageData;
  title: string;
}

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ["400", "700"]
});

export default function Component() {
  const {
    theme,
    setTheme,
    openIndex,
    setOpenIndex,
  } = useTheme();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setStatus('Please enter a valid email address.');
        return;
      }

      const response = await axios.post('/api/subscribe', { email, name });
      if (response.status === 200) {
        setStatus('Thank You for Subscribing');
      } else {
        setStatus(`Unexpected status code: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Error: ", error);
      setStatus(error?.response?.data?.message || "Something went wrong. Please try again!");
    }
  };

  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {/* Hero Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 z-0 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/012/979/472/non_2x/modern-high-resolution-black-geometric-background-with-polygonal-grid-abstract-black-metallic-hexagonal-pattern-simple-illustration-vector.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div> {/* Subtle Overlay */}
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 max-lg:grid-rows-2 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-start space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-col space-y-1 items-start justify-around">
                    <div className="flex justify-center items-center space-x-3 h-auto overflow-visible leading-7 p-4">
                      <h1
                        className={`text-5xl font-bold tracking-tight h-auto sm:text-5xl max-w-full whitespace-normal custom-h1 text-white ${lobsterTwo.className}`}
                      >
                        Sourcely
                      </h1>
                      <AnimatedIcon />
                    </div>
                    <p
                      className={`text-base sm:text-lg lg:text-xl font-bold leading-relaxed tracking-wide text-left mt-2 max-w-xl bg-clip-text text-transparent bg-gradient-to-r from-[#00c6ff] to-[#0072ff] shadow-gray-800`}
                    >
                      Your Go-to Source for the Best and Cheapest Picks
                    </p>
                  </div>
                  <p className="max-w-full md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
                    Explore high-performance products crafted with precision and designed to fit your lifestyle and budget. From cutting-edge gadgets to essential everyday items, we offer expert reviews to help you find the best deals without compromising on quality.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Now
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input dark:border-zinc-800/30 hover:bg-background px-8 text-sm font-medium shadow-sm transition-colors text-black hover:text-white bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex z-40 relative mx-auto text-center justify-center items-center lg:w-full max-sm:max-w-xs md:max-w-2xl h-full px-4">
                {/* <Carousel images={imageObjects} /> */}
                <RiDoubleQuotesL fontSize={28} className="absolute top-2 text-white left-6 lg:left-2" />
                <p className="text-center text-white text-2xl md:text-2xl md:leading-relaxed xl:text-3xl max-lg:marker:overflow-hidden ">
                  <span className={`${dancingScript.className} text-3xl md:text-4xl lg:text-5xl`}>A</span>
                  t Sourcely, we meticulously research every product to ensure it meets your specific needs. It's not just about wanting a product; it's about choosing what you truly need. Make informed decisions. Choose Sourcely!
                </p>
                <RiDoubleQuotesR fontSize={28} className="absolute text-white right-6 lg:right-24 bottom-0" />
                <p className={`${dancingScript.className} absolute invisible lg:visible text-white lg:bottom-[-48px] right-0 text-lg font-extralight tracking-wider`}>
                  Niyi Andrew
                </p>
              </div>

            </div>
          </div>
        </section>
        {/* Product Grid */}
        <section className="overflow-hidden relative w-full py-6 sm:py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex mb-6 lg:mb-0 flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl leading-tight p-4 m-2">
                  Editor’s Choice: The Best Devices You Can Own Right Now
                </h2>

                <p className="max-w-full text-sm sm:text-base md:text-lg">
                  Explore our handpicked selection of top gadgets, each chosen for their outstanding performance and value. Find the ideal laptop for your needs with our expert-curated recommendations.
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <ProductGrid />
              <ProductGridMobile />
            </div>
          </div>
        </section>

        {/* Subscription Section*/}
        <section data-aos="zoom-in" className="overflow-hidden hidden md:block w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/assets/coffe.png')" }}>
          <div className="absolute inset-0 bg-black/50"></div> {/* Subtle Overlay */}
          <div className="container grid items-center justify-start gap-4 px-4 text-center md:px-6 relative z-10">
            <div className="space-y-3">
              <h2 className="text-3xl overflow-hidden font-bold tracking-tighter md:text-4xl/tight text-white">
                Stay Updated on Our Latest Products
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
                Subscribe to our email list to receive updates on new product releases, special offers, and more.
              </p>
            </div>
            <div className="mx-auto w-full max-w-2xl space-y-2">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row bg-transparent xl:bg-gray-900 p-4 rounded-2xl">
                <input
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full sm:w-1/3 px-4 py-2 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full sm:w-1/3 px-4 py-2 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <SubButton type="submit">Subscribe</SubButton>
              </form>
              <p className="text-white">{status}</p>
              <p className="text-xs text-muted-foreground text-white">
                We respect your privacy. Your email will not be shared.
              </p>
            </div>
          </div>
        </section>
        {/* Subscription Section mobile */}
        <section data-aos="flip-left" className="overflow-hidden md:hidden w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/assets/coffe.png')" }}>
          <div className="absolute inset-0 bg-black/50"></div> {/* Subtle Overlay */}
          <div className="container grid items-center justify-start gap-4 px-4 text-center md:px-6 relative z-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                Stay Updated on Our Latest Products
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
                Subscribe to our email list to receive updates on new product releases, special offers, and more.
              </p>
            </div>
            <div className="mx-auto w-full max-w-2xl space-y-2">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row bg-transparent xl:bg-gray-900 p-4 rounded-2xl">
                <input
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full sm:w-1/3 px-4 py-2 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full sm:w-1/3 px-4 py-2 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <SubButton type="submit">Subscribe</SubButton>
              </form>
              <p className="text-white">{status}</p>
              <p className="text-xs text-muted-foreground text-white">
                We respect your privacy. Your email will not be shared.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex overflow-hidden flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-t-zinc-200/80">
          <p className="text-xs text-muted-foreground">&copy; 2024 Sourcely. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6 mt-2 sm:mt-0">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
        </footer>
      </main>
    </div>
  );
}
