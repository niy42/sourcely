"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { EventHandler, useEffect, useState } from "react";
import SubButton from "@/components/shared/SubButtons";
import AnimatedIcon from "@/components/shared/AnimatedIcon";
import { Sacramento, Lobster_Two } from "next/font/google";
import axios from "axios";
import { StaticImageData } from "next/image";
import { lapt as image1, laptop as image2, flip, okoro } from "@/public/assets";
import Carousel from "@/components/shared/Carousel";

interface Props {
  image: StaticImageData,
  title: string
};

export type imageProps = {
  images: Props[]
};

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const imageObjects: Props[] = [
  {
    image: image1, title: ''
  }, { image: image2, title: '' },
  { image: flip, title: '' },
  { image: okoro, title: '' }]

export default function Component() {
  const [theme, setTheme] = useState('dark');
  const [bg, setBg] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      // Validate email format
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setStatus('Please enter a valid email address.');
        return;
      }

      const response = await axios.post('/api/subscribe', { email, name });
      if (response.status === 200) {
        setStatus('Thank You for Subscribing');
        setEmail('');
        setName(''); // Reset name if you are using it
      } else {
        setStatus(`Unexpected status code: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Error: ", error);
      if (error?.response && error.response?.status === 409) {
        setStatus(error?.response?.data?.message || "Something went wrong. Please try again!");
      } else {
        setStatus("Something went wrong. Please try again!");
      }
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

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
      <header className={`fixed w-full px-4 lg:px-6 h-14 flex items-center justify-between transition-colors duration-300 shadow z-40 
      ${theme === 'dark' ?
          (bg ? 'bg-gray-900' : 'bg-zinc-600/30') :
          (bg ? 'bg-gray-300' : 'bg-[#f8eded]')
        }`}>
        <Link href="#" className="flex items-center space-x-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span>Sourcely</span>
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
          <ThemeToggle currentTheme={theme} setTheme={setTheme} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/012/979/472/non_2x/modern-high-resolution-black-geometric-background-with-polygonal-grid-abstract-black-metallic-hexagonal-pattern-simple-illustration-vector.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div> {/* Subtle Overlay */}
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[0.5fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-col space-y-1 items-start justify-around">
                    <div className="flex justify-center items-center space-x-3 h-auto overflow-visible leading-7 p-4">
                      <h1 className={`text-5xl font-bold tracking-tight h-auto sm:text-5xl max-w-full whitespace-normal custom-h1 text-white ${lobsterTwo.className}`}>
                        Sourcely
                      </h1>
                      <AnimatedIcon />
                    </div>
                    <p className={`text-base sm:text-lg lg:text-xl font-bold leading-relaxed tracking-wide text-left mt-2 max-w-xl bg-clip-text text-transparent bg-gradient-to-r from-[#00c6ff] to-[#0072ff] shadow-md shadow-gray-800`}>
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
              {/*<img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Sourcely photos"
                className="mx-auto text-white aspect-square overflow-hidden rounded-xl object-cover w-full"
              />*/}
              <Carousel images={imageObjects} />
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="relative lg:left-12 w-full py-12 md:py-24 lg:py-32 overflow-x-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl overflow-hidden">Explore Our Product Line</h2>
                <p className="max-w-full text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our diverse range of products, each designed to enhance your daily life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 overflow-x-hidden">
              { /*<!-- Product Card 1 -->*/}
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Product</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  width="450"
                  height="450"
                  alt="Product 1"
                  className="mx-auto aspect-square overflow-hidden object-cover transition-opacity group-hover:opacity-50"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-semibold md:text-xl">Ergonomic Office Chair</h3>
                  <p className="text-sm text-muted-foreground">Comfortable and supportive chair for long workdays.</p>
                  <h4 className="text-base font-semibold md:text-lg">$249.99</h4>
                </div>
              </div>

              {/*<!-- Product Card 2 -->*/}
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Product</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  width="450"
                  height="450"
                  alt="Product 2"
                  className="mx-auto aspect-square overflow-hidden object-cover transition-opacity group-hover:opacity-50"
                />

                <div className="p-4 bg-background">
                  <h3 className="text-lg font-semibold md:text-xl">Wireless Noise-Cancelling Headphones</h3>
                  <p className="text-sm text-muted-foreground">Immersive audio experience for music and calls.</p>
                  <h4 className="text-base font-semibold md:text-lg">$199.99</h4>
                </div>
              </div>

              { /*<!-- Product Card 3 -->*/}
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Product</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  width="450"
                  height="450"
                  alt="Product 3"
                  className="mx-auto aspect-square overflow-hidden object-cover transition-opacity group-hover:opacity-50"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-semibold md:text-xl">Stainless Steel Water Bottle</h3>
                  <p className="text-sm text-muted-foreground">Durable and eco-friendly water bottle for on-the-go.</p>
                  <h4 className="text-base font-semibold md:text-lg">$29.99</h4>
                </div>
              </div>
              {/*<!-- Product Card 4 -->*/}
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Product</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  width="450"
                  height="450"
                  alt="Product 4"
                  className="mx-auto aspect-square overflow-hidden object-cover transition-opacity group-hover:opacity-50"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Acme Pro Laptop</h3>
                  <p className="text-sm text-muted-foreground">
                    Unleash your productivity with our powerful laptop.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/*<!-- Subscription Section -->*/}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/assets/coffe.png')" }}>
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

        {/*<!-- Footer -->*/}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-t-zinc-200/80">
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
    </div >
  );
}

function MountainIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
      <path d="M12 3l2.657 6.153 6.749.58-5.088 4.596L16.434 21 12 17.897 7.566 21l1.016-6.671-5.088-4.596 6.748-.58L12 3z" />
    </svg>
  );
}
