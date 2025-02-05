"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#FFFFFF] h-[100px] w-full flex items-center justify-between px-4 sm:px-6 md:px-10">
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={50}
          height={32}
          className="w-[50px] h-[32px]"
        />
        <h2 className="text-black text-[24px] sm:text-[28px] md:text-[34px] font-bold ml-4">
          Furniro
        </h2>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" passHref>
          <div className="text-[14px] sm:text-[16px] text-black hover:text-gray-500">
            Home
          </div>
        </Link>
        <Link href="/shop" passHref>
          <div className="text-[14px] sm:text-[16px] text-black hover:text-gray-500">
            Shop
          </div>
        </Link>
        <Link href="/blog" passHref>
          <div className="text-[14px] sm:text-[16px] text-black hover:text-gray-500">
            Blog
          </div>
        </Link>
        <Link href="/contact" passHref>
          <div className="text-[14px] sm:text-[16px] text-black hover:text-gray-500">
            Contact
          </div>
        </Link>
      </div>

      {/* Icons (Desktop) */}
      <div className="hidden md:flex space-x-6">
        <Link href={"/"}>
          <MdManageAccounts className="w-6 h-6 cursor-pointer gap-5" />
        </Link>
        <FiSearch className="w-6 h-6 cursor-pointer gap-4" />
        <FaRegHeart className="w-6 h-6 cursor-pointer" />
        <Link href={"/cart"}>
          <IoCartOutline className="w-8 h-6 cursor-pointer" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[100px] left-0 w-full bg-white py-4 px-6 shadow-lg z-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-black text-[24px] sm:text-[28px] font-bold ml-4">
              Furniro
            </h2>
            <button onClick={toggleMenu} className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            <Link href="/" passHref>
              <div className="text-[16px] text-black py-2 hover:text-gray-500 flex items-center">
                Home
              </div>
            </Link>
            <Link href="/shop" passHref>
              <div className="text-[16px] text-black py-2 hover:text-gray-500 flex items-center">
                Shop
              </div>
            </Link>
            <Link href="/blog" passHref>
              <div className="text-[16px] text-black py-2 hover:text-gray-500 flex items-center">
                Blog
              </div>
            </Link>
            <Link href="/contact" passHref>
              <div className="text-[16px] text-black py-2 hover:text-gray-500 flex items-center">
                Contact
              </div>
            </Link>
          </div>
          <div className="flex space-x-6 mt-4">
            <Link href={"/"}>
              <MdManageAccounts className="w-6 h-6 cursor-pointer gap-5" />
            </Link>
            <FiSearch className="w-6 h-6 cursor-pointer gap-4" />
            <FaRegHeart className="w-6 h-6 cursor-pointer" />
            <Link href={"/cart"}>
              <IoCartOutline className="w-8 h-6 cursor-pointer" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

{
  /* 

import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40} // Adjusted for better visibility
              height={40} // Adjusted for better visibility
            />
            <span className="ml-1 text-2xl font-bold">Funiro</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center font-[500] gap-8 text-[20px] justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
            <Link href={"/shop"} className="mr-5 hover:text-gray-900">Shop</Link>
            <Link href={"/blog"} className="mr-5 hover:text-gray-900">Blog</Link>
            <Link href={"/contact"} className="mr-5 hover:text-gray-900">Contact</Link>
          </nav>
          <div className="gap-6 flex font-[500]">
            <Link href={"/product"}>
            <MdManageAccounts className="w-6 h-6 cursor-pointer gap-5" />
            </Link>
            <FiSearch className="w-6 h-6 cursor-pointer gap-4" />
            <FaRegHeart className="w-6 h-6 cursor-pointer" />
            <Link href={"/cart"}><IoCartOutline className="w-8 h-6 cursor-pointer" /></Link> 
          </div>
        </div>
      </header>
    </div>
  );
}
 */
}
