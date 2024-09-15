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

interface Laptop {
    video: string;
    images: StaticImageData[];
    name: string;
    desc: string;
    price: string;
}

export const laptopData: Laptop[] = [
    {
        video: "",
        images: [core, core1, core2, core3, core4],
        name: "core-i9",
        desc: "idshoik",
        price: "965000"
    },
    {
        video: "",
        images: [core, core1, core2, core3, core4],
        name: "core-i7",
        desc: "Sample core i7 laptop",
        price: "975"
    },
];