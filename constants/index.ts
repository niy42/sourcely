import { StaticImageData } from "next/image";
import {
    ring,
    ring1,
    ring2,
    ring3,
    ring4,
    ring5,
    core,
    core1,
    core2,
    core3,
    core4,
} from "@/public/assets";

interface SubNavLink {
    title: string;
    url: string;
}

interface MobNav {
    title: string;
    url: string;
    subNavLinks: SubNavLink[];
}

interface Laptop {
    video: string;
    images: StaticImageData[];
    name: string;
    desc: string;
    price: string;
}

export type Navlinks = {
    name: string,
    url: string,
    classname: string
}

export const laptopData: Laptop[] = [
    {
        video: "",
        images: [core, core1, core2, core3, core4],
        name: "core-i9",
        desc: "Category: Professionals",
        price: "Lightening speed"
    },
    {
        video: "",
        images: [ring, ring1, ring2, ring3, ring4, ring5],
        name: "llNuyoah R02",
        desc: "Category: Smart Ring",
        price: "Healthy"
    },
    {
        video: "",
        images: [core, core1, core2, core3, core4],
        name: "core-i9",
        desc: "Category: Gamers",
        price: "Lightening speed"
    },
    {
        video: "",
        images: [core, core1, core2, core3, core4],
        name: "core-i7",
        desc: "Category: Developers",
        price: "Lightening speed"
    },
];

export const navlinksfirst: Array<Navlinks> = [
    { name: "Gamers", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#1fce43] duration-200 whitespace-nowrap" },
    { name: "Developers", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Students", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Professional", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" }
];

export const navlinkssecond: Array<Navlinks> = [
    { name: "Smartwatches", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Fitness Trackers", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "VR Headsets", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Smart Glasses", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Smart Rings", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" }
];

export const navlinksthird: Array<Navlinks> = [
    { name: "Smartwatch Bands", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Mouse & Keyboards", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Chargers & Adapters", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Headphones & Earbuds", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Laptop Bags & Sleeves", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
];

export const mobileNav: MobNav[] = [
    { title: "Laptops", url: "", subNavLinks: [{ title: "Gamers", url: "" }, { title: "Developers", url: "" }, { title: "Students", url: "" }, { title: "Professionals", url: "" }] },
    { title: "Wearables", url: "", subNavLinks: [{ title: "Smartwatches", url: "" }, { title: "Fitness Trackers", url: "" }, { title: "VR Headsets", url: "" }, { title: "Smart Glasses", url: "" }, { title: "Smart Rings", url: "" }] },
    { title: "Accessories", url: "", subNavLinks: [{ title: "Smartwatch Bands", url: "" }, { title: "Mouse & Keyboards", url: "" }, { title: "Chargers & Adapters", url: "" }, { title: "Headphones & Earbuds", url: "" }, { title: "Laptop Bags & Sleeves", url: "" }] },
];

/*function SourcelyIcon(props: any) {
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
}*/