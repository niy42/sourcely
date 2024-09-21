import { StaticImageData } from "next/image";
import {
    keyboard as image,
    keyboard1 as image1,
    keyboard2 as image2,
    smartphone,
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
        desc: "Category: Software dev",
        price: "Lightening speed"
    },
    {
        video: "",
        images: [core, core1, core2, core3, core4],
        name: "core-i7",
        desc: "Category: Gamers",
        price: "Fast and reliable"
    },
    {
        video: "",
        images: [core, core1, core2, core3, core4],
        name: "core-i9",
        desc: "Category: Software dev",
        price: "Lightening speed"
    },
    {
        video: "",
        images: [core, core1, core2, core3, core4],
        name: "core-i7",
        desc: "Category: Software dev",
        price: "Lightening speed"
    },
];

export const navlinksfirst: Array<Navlinks> = [
    { name: "Best Picks", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Performance Reviews", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Acessories", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" }
];

export const navlinkssecond: Array<Navlinks> = [
    { name: "Recommended Laptops", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Specs & Features", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Coding Tools", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" }
];

export const navlinksthird: Array<Navlinks> = [
    { name: "Remote Work Essentials", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Productivity Tips", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Office Accessories", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" }
];

export const mobileNav: MobNav[] = [
    { title: "Gamers", url: "", subNavLinks: [{ title: "Best Picks", url: "" }, { title: "Performance Reviews", url: "" }, { title: "Acessories", url: "" }] },
    { title: "Developers", url: "", subNavLinks: [{ title: "Recommended Laptops", url: "" }, { title: "Specs & Features", url: "" }, { title: "Coding Tools", url: "" }] },
    { title: "Professionals", url: "", subNavLinks: [{ title: "Remote Work Essentials", url: "" }, { title: "Productivity Tips", url: "" }, { title: "Office Accessories", url: "" }] },
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