"use client"
import Hero from "@/components/Hero";

import Range from "@/components/Range";
import Rooms from "@/components/Rooms";
import Setup from "@/components/Setup";
import { Link } from "lucide-react";
import Products from "./products/page";



export default function Home() {
  return (
    <div>
      <Hero />
      <Range />
      <Products/>
      <Rooms />
      <Setup />


      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center font-[500] gap-8 text-[20px] justify-center">
        <Link href="/" className="mr-5 hover:text-gray-900">
          Home
        </Link>
        <Link href="/shop" className="mr-5 hover:text-gray-900">
          Shop
        </Link>
        <Link href="/blog" className="mr-5 hover:text-gray-900">
          Blog
        </Link>
        <Link href="/contact" className="mr-5 hover:text-gray-900">
          Contact
        </Link>
      </nav>
    </div>
  );
}
