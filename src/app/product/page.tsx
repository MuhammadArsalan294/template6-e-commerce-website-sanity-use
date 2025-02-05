// pages/index.js

{/*

import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import Header from "@/components/Header";

export default function Product() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section *
      <Header />
      <div className="relative">
        <Image
          src={"/images/contactpic.png"}
          alt="Contact Header Image"
          width={1500}
          height={100}
          className="w-full h-auto"
        />
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">
            Product Comparison
          </h2>
          <div className="flex items-center justify-center text-sm sm:text-base lg:text-lg">
            <h2>Home</h2>
            <IoIosArrowForward />
            <h2>Comparison</h2>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-6xl mx-auto">
        {/* Product Cards *
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h1 className="text-xl font-semibold">
              Go to Product page for more Products
            </h1>
            <button className="text-gray-500 mt-2 underline">View More</button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image
              src="/images/shop2sofa.png"
              alt="Asgaard Sofa"
              width={1000}
              height={500}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-medium mt-4">Asgaard Sofa</h2>
            <p className="text-gray-600">Rs. 250,000.00</p>
            <p className="text-yellow-500 font-bold">4.7 ★★★★★ (204 Reviews)</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image
              src="/images/shop2sofa1.png"
              alt="Outdoor Sofa Set"
              width={1000}
              height={500}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-medium mt-4">Outdoor Sofa Set</h2>
            <p className="text-gray-600">Rs. 224,000.00</p>
            <p className="text-yellow-500 font-bold">4.2 ★★★★☆ (145 Reviews)</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg flex flex-col">
            <button className="text-black text-left font-bold mb-2">
              Add A Product
            </button>
            <div>
              <label className="block text-sm font-medium mb-2"></label>
              <select className="w-full rounded p-3 bg-yellow-500 hover:bg-yellow-600 text-black">
                <option>Choose a Product</option>
              </select>
            </div>
          </div>
        </div>

        {/* Divider *
        <div className="border-b border-[#E8E8E8] w-full mt-16"></div>

        {/* General Detail 
        <div className="flex flex-wrap items-start justify-between mt-14 w-full max-w-[870px] px-4 mx-auto mr-96">
          {/* General 1 *
          <div className="flex flex-col gap-6 text-[18px] w-full sm:w-1/2 md:w-1/3">
            <h1 className="text-[28px] font-semibold">General</h1>
            <h2>Sales Package</h2>
            <h2>Model Number</h2>
            <h2>Secondary Material</h2>
            <h2>Configuration</h2>
            <h2>Upholstery Material</h2>
            <h2>Upholstery Color</h2>
          </div>

          {/* General 2 *
          <div className="flex flex-col gap-6 text-[18px] mt-6 sm:mt-8 md:mt-16 w-full sm:w-1/2 md:w-1/3">
            <h2>1 sectional sofa</h2>
            <h2>TFCBLIGRBL6SRHS</h2>
            <h2>Solid Wood</h2>
            <h2>L-shaped</h2>
            <h2>Fabric + Cotton</h2>
            <h2>Bright Grey & Lion</h2>
          </div>

          {/* General 3 *
          <div className="flex flex-col gap-6 text-[18px] mt-6 sm:mt-8 md:mt-16 w-full sm:w-1/2 md:w-1/3">
            <h2>1 Three Seater, 2 Single Seater</h2>
            <h2>DTUBLIGRBL568</h2>
            <h2>Solid Wood</h2>
            <h2>L-shaped</h2>
            <h2>Fabric + Cotton</h2>
            <h2>Bright Grey & Lion</h2>
          </div>
        </div>

        {/* Product Detail *
        <div className="flex flex-wrap items-start justify-between mt-14 w-[870px] px-4 mx-auto mr-96">
          {/* Product 1 *
          <div className="flex flex-col gap-6 text-[18px] w-full sm:w-1/2 lg:w-1/3">
            <h1 className="text-[28px] font-semibold">Product</h1>
            <h2>Filling Material</h2>
            <h2>Finish Type</h2>
            <h2>Adjustable Headrest</h2>
            <h2>Maximum Load Capacity</h2>
            <h2>Origin of Manufacture</h2>
          </div>
          {/* Product 2 *
          <div className="flex flex-col gap-6 text-[18px] mt-6 sm:mt-8 lg:mt-16 w-full sm:w-1/2 lg:w-1/3">
            <h2>Foam</h2>
            <h2>Bright Grey & Lion</h2>
            <h2>No</h2>
            <h2>280 KG</h2>
            <h2>India</h2>
          </div>

          {/* Product 3 *
          <div className="flex flex-col gap-6 text-[18px] mt-6 sm:mt-8 lg:mt-16 w-full sm:w-1/2 lg:w-1/3">
            <h2>Matte</h2>
            <h2>Bright Grey & Lion</h2>
            <h2>Yes</h2>
            <h2>300 KG</h2>
            <h2>India</h2>
          </div>
        </div>

        {/* Dimensions Detail *
        <div className="flex flex-wrap items-start justify-between mt-14 w-[870px] px-4 mx-auto mr-96">
          {/* Dimensions 1 *
          <div className="flex flex-col gap-6 text-[18px] w-full sm:w-1/2 lg:w-1/3">
            <h1 className="text-[28px] font-semibold">Dimensions</h1>
            <h2>Width</h2>
            <h2>Height</h2>
            <h2>Depth</h2>
            <h2>Weight</h2>
            <h2>Seat Height</h2>
            <h2>Leg Height</h2>
          </div>

          {/* Dimensions 2 *
          <div className="flex flex-col gap-6 text-[18px] mt-6 sm:mt-8 lg:mt-16 w-full sm:w-1/2 lg:w-1/3">
            <h2>265.32 cm</h2>
            <h2>76 cm</h2>
            <h2>167.76 cm</h2>
            <h2>45 KG</h2>
            <h2>41.52 cm</h2>
            <h2>5.46 cm</h2>
          </div>

          {/* Dimensions 3 *
          <div className="flex flex-col gap-6 text-[18px] mt-6 sm:mt-8 lg:mt-16 w-full sm:w-1/2 lg:w-1/3">
            <h2>265.32 cm</h2>
            <h2>76 cm</h2>
            <h2>167.76 cm</h2>
            <h2>65 KG</h2>
            <h2>41.52 cm</h2>
            <h2>5.46 cm</h2>
          </div>
        </div>

        {/* Warranty Detail *
        <div className="flex flex-wrap items-start justify-between mt-14 text-[18px] w-[870px] px-4 mx-auto mr-96">
          {/* Warranty 1 */}
          <div className="flex flex-col mb-0 mx-auto w-full sm:w-1/2 lg:w-1/3">
            <h1 className="text-[28px] font-semibold">Warranty</h1>
            <h2 className="mt-6">Warranty Summary</h2>
            <h2 className="mt-12">Warranty Service Type</h2>
            <h2 className="mt-28">Covered in Warranty</h2>
            <h2 className="mt-20">Not Covered in Warranty</h2>
            <h2 className="mt-36">Domestic Warranty</h2>
          </div>

          {/* Warranty 2 *
          <div className="flex flex-col gap-6 mt-16 mx-auto w-full sm:w-1/2 lg:w-1/3">
            <h2 className="w-[226px]">1 Year Manufacturing Warranty</h2>
            <h2 className="w-[241px]">
              For Warranty Claims or Any Product Related Issues Please Email at
              operations@trevifurniture.com
            </h2>
            <h2 className="w-[241px] mt-1">
              Warranty Against Manufacturing Defect
            </h2>
            <h2 className="w-[241px] mt-8">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear.
            </h2>
            <h2 className="mt-3">1 Year</h2>
            <button className="w-[215px] h-[50px] bg-[#B88E2F] text-white mt-10 rounded-lg shadow-lg">
              Add To Cart
            </button>
          </div>

          {/* Warranty 3 *
          <div className="flex flex-col gap-6 mt-16 mx-auto w-full sm:w-1/2 lg:w-1/3">
            <h2 className="w-[226px]">1.2 Year Manufacturing Warranty</h2>
            <h2 className="w-[241px]">
              For Warranty Claims or Any Product Related Issues Please Email at
              support@xyz.com
            </h2>
            <h2 className="w-[241px] mt-7">
              Warranty of the product is limited to manufacturing defects only.
            </h2>
            <h2 className="w-[241px] mt-2">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use.
            </h2>
            <h2 className="mt-10">3 Months</h2>
            <button className="w-[215px] h-[50px] bg-[#B88E2F] text-white mt-10 rounded-lg shadow-lg">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Features Section *
      <div className="mt-5 mb-5 flex flex-wrap items-center justify-around gap-6 p-4 w-full bg-[#F9F1E7]">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left w-full sm:w-auto">
          <Image
            src="/images/contact1.png"
            width={40}
            height={40}
            alt="High Quality Materials"
          />
          <div>
            <h4 className="font-bold text-base sm:text-lg">High Quality</h4>
            <p className="text-sm sm:text-base">crafted from top materials</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left w-full sm:w-auto">
          <Image
            src="/images/contact2.png"
            width={40}
            height={40}
            alt="Warranty Guarantee"
          />
          <div>
            <h4 className="font-bold text-base sm:text-lg">
              Warranty Protection
            </h4>
            <p className="text-sm sm:text-base">Over 2 years</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left w-full sm:w-auto">
          <Image
            src="/images/contact3.png"
            width={40}
            height={40}
            alt="Free Shipping"
          />
          <div>
            <h4 className="font-bold text-base sm:text-lg">Free Shipping</h4>
            <p className="text-sm sm:text-base">Order over 150 $</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left w-full sm:w-auto">
          <Image
            src="/images/contact4.png"
            width={40}
            height={40}
            alt="24/7 Customer Support"
          />
          <div>
            <h4 className="font-bold text-base sm:text-lg">24 / 7 Support</h4>
            <p className="text-sm sm:text-base">Dedicated support</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
*/}