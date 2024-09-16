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

import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import ProductGrid from "@/components/shared/ProductGrid";
import ProductGridMobile from "@/components/shared/ProductGridMobile";
import { useTheme } from "@/context/ThemeContext";
import TestIcon from "@/components/shared/MobileNav";
import MobileNav from "@/components/shared/MobileNav";

interface Props {
  image: StaticImageData;
  title: string;
}

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Component() {
  const {
    theme,
    setTheme,
    openIndex,
    setOpenIndex,
  } = useTheme();
  const [bg, setBg] = useState(false);
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

  const handleBg = () => {
    setBg(window.scrollY >= 40);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleBg);
    return () => {
      window.removeEventListener('scroll', handleBg);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className={`fixed w-full px-4 lg:px-6 h-14 flex items-center justify-between transition-colors duration-300 shadow z-40 overflow-hidden
      ${theme === 'dark' ? (bg ? 'bg-gray-900' : 'bg-zinc-600/30') : (bg ? 'bg-gray-300' : 'bg-[#f8eded]')}`}>
        <Link href="#" className="flex items-center space-x-0" prefetch={false}>
          <Source className="h-8 w-8" />
          <span className={`${dancingScript.className}`}>ourcely</span>
        </Link>
        <div className="flex-1 flex items-center justify-end ml-4 lg:ml-6">
          <nav className="hidden lg:flex flex-[0.5] gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Products
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
          <div className="flex justify-between items-center gap-3 md:gap-6">
            <ThemeToggle currentTheme={theme} setTheme={setTheme} />
            <MobileNav />
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {/* Hero Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative"
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
                    Buy Now
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
              <div className="flex justify-center items-center w-full h-full">
                { /*<Carousel images={imageObjects} />*/}
                <Image src={""} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* Product Grid */}
        <section className="overflow-hidden relative w-full py-6 sm:py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex mb-6 lg:mb-0 flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl overflow-hidden">Explore Our Product Line</h2>
                <p className="max-w-full text-sm sm:text-base md:text-lg">
                  Check out our diverse range of products, each designed to enhance your daily life.
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
          <p className="text-xs text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
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

function Source(props: any) {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="97.000000pt" height="110.000000pt" viewBox="0 0 97.000000 110.000000"
      preserveAspectRatio="xMidYMid meet" {...props}>

      <g transform="translate(0.000000,110.000000) scale(0.100000,-0.100000)"
        fill="currentColor" stroke="none"> {/* Changed fill to white */}
        <path d="M253 922 l-223 -127 0 -126 0 -126 227 -130 227 -130 85 49 c48 27
        89 53 93 56 4 4 -98 68 -227 142 -129 74 -234 137 -234 140 0 6 258 153 277
        158 6 2 111 -53 232 -122 121 -69 222 -126 225 -126 3 0 5 48 5 108 l-1 107
        -224 128 c-123 70 -227 127 -232 127 -4 0 -108 -58 -230 -128z"/>
        <path d="M392 727 c-51 -29 -92 -54 -92 -57 0 -3 69 -44 153 -92 83 -48 190
        -110 236 -136 l83 -49 -140 -82 c-77 -44 -144 -81 -148 -81 -3 0 -104 56 -224
        125 -119 69 -220 125 -224 125 -4 0 -5 -48 -4 -107 l3 -107 220 -128 c121 -70
        225 -128 230 -127 6 0 109 57 230 128 l220 128 3 124 3 124 -207 120 c-114 66
        -217 125 -229 132 -18 10 -33 5 -113 -40z"/>
      </g>
    </svg>
  )
}


function SourcelyIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
      <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
    </svg>
  );
}
function MountainIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
      <path d="M12 3l2.657 6.153 6.749.58-5.088 4.596L16.434 21 12 17.897 7.566 21l1.016-6.671-5.088-4.596 6.748-.58L12 3z" />
    </svg>
  );
}
