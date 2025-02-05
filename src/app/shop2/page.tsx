"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from "next/image";


const Shop2 = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const allProducts = [
    {
      src: "/images/Image1.png",
      alt: "Syltherine",
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      discount: "-30%",
    },
    {
      src: "/images/Image2.jpg",
      alt: "Leviosa",
      title: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      src: "/images/Image3.png",
      alt: "Lolito",
      title: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discount: "-50%",
    },
    {
      src: "/images/Image4.png",
      alt: "Respira",
      title: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      badge: "New",
    },
    {
      src: "/images/Image5.png",
      alt: "Grifo",
      title: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
    },
    {
      src: "/images/Image6.png",
      alt: "Muggo",
      title: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      badge: "New",
    },
    {
      src: "/images/Image7.png",
      alt: "Pingky",
      title: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discount: "-50%",
    },
    {
      src: "/images/Image8.png",
      alt: "Potty",
      title: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      badge: "New",
    },
  ];
  /* product secttion */
  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleShowMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 4, allProducts.length));
  };
  return (
    <div className="">
      <div className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="max-w-full mx-auto text-sm bg-[#F9F1E7] text-gray-500 mb-4">
          <div className="flex flex-wrap p-6 lg:ml-40">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="mx-2 mt-1">
              <IoIosArrowForward />
            </span>
            <a href="/shop" className="hover:underline">
              Shop
            </a>
            <span className="mx-2 mt-1">
              <IoIosArrowForward />
            </span>
            <span>Asgaard Sofa</span>
          </div>
        </div>

        {/* Product Section */}
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Section - Image Gallery */}
            <div className="w-full md:w-1/2 flex">
              <div className="flex flex-col gap-4 mr-4">
                <Image
                  src="/images/shop2sofa1.png"
                  alt="Thumbnail 1"
                  width={100}
                  height={10}
                  className="w-20 h-15 rounded cursor-pointer border border-gray-300 bg-[#F9F1E7]"
                />
                <Image
                  src="/images/shop2sofa2.png"
                  alt="Thumbnail 2"
                  width={100}
                  height={10}
                  className="w-20 h-15 rounded cursor-pointer border border-gray-300 bg-[#F9F1E7]"
                />
                <Image
                  src="/images/shop2sofa3.png"
                  alt="Thumbnail 3"
                  width={100}
                  height={10}
                  className="w-20 h-15 rounded cursor-pointer border border-gray-300 bg-[#F9F1E7]"
                />
                <Image
                  src="/images/shop2sofa4.png"
                  alt="Thumbnail 4"
                  width={100}
                  height={10}
                  className="w-20 h-15 rounded cursor-pointer border border-gray-300 bg-[#F9F1E7]"
                />
              </div>
              <div className="flex-grow">
                <Image
                  src="/images/shop2sofa.png"
                  alt="Asgaard Sofa"
                  width={400}
                  height={100}
                  className="rounded border w-full h-[400px] bg-[#F9F1E7]"
                />
              </div>
            </div>

            {/* Right Section - Product Details */}
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl font-bold text-gray-800">Asgaard Sofa</h1>
              <p className="text-xl font-semibold text-gray-600 mt-2">
                Rs. 250,000.00
              </p>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-300">★</span>
                </div>
                <p className="ml-2 text-sm text-gray-500">
                  (5 Customer Reviews)
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <div className="mt-4">
                <p className="text-sm text-gray-700 font-medium">Size</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                    L
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                    XL
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                    XS
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-700 font-medium">Color</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="w-8 h-8 bg-purple-500 rounded-full border"></button>
                  <button className="w-8 h-8 bg-black rounded-full border"></button>
                  <button className="w-8 h-8 bg-yellow-500 rounded-full border"></button>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded text-lg font-bold text-gray-700 px-4 py-2 hover:bg-gray-200">
                  <button onClick={decrement}>-</button>
                  <span className="mx-2">{quantity}</span>
                  <button onClick={increment}>+</button>
                </div>
                <button className="px-6 py-2 border border-gray-300 text-black rounded-xl hover:bg-yellow-600">
                  Add to Cart
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-xl hover:bg-gray-100">
                  + Compare
                </button>
              </div>
              <hr className="mt-5" />
              <div className="mt-6 text-sm text-gray-600 space-y-2">
                <p>
                  SKU <span className="font-medium ml-10">: SS001</span>
                </p>
                <p>
                  Category <span className="font-medium ml-2">: Sofas</span>
                </p>
                <p>
                  Tags{" "}
                  <span className="font-medium ml-9">
                    : Sofa, Chair, Home, Shop
                  </span>
                </p>
                <div className="flex items-center space-x-2">
                  <p>
                    Share <span className="ml-7">:</span>
                  </p>
                  <FaFacebook className="text-[20px] cursor-pointer" />
                  <FaLinkedin className="text-[20px] cursor-pointer" />
                  <AiFillTwitterCircle className="text-[23px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-screen p-">
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
            <hr className="mb-10" />
            {/* Tabs Section */}
            <div className="flex flex-wrap justify-center md:justify-center">
              <button className="text-sm px-4 py-2 border-b-2 border-black font-bold">
                Description
              </button>
              <button className="text-sm px-4 py-2 text-gray-500 hover:text-black">
                Additional Information
              </button>
              <button className="text-sm px-4 py-2 text-gray-500 hover:text-black">
                Reviews [5]
              </button>
            </div>

            {/* Content Section */}
            <div className="flex justify-center p-10">
              <div>
                <p className="text-sm text-gray-600 leading-6">
                  Embodying the raw, wayward spirit of rock &apos;n&apos; roll,
                  the Kilburn portable active stereo speaker takes the
                  unmistakable look and sound of Marshall, unplugs the chords,
                  and takes the show on the road.
                </p>
                <p className="text-sm text-gray-600 leading-6 mt-4">
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece
                  of vintage-styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine-tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </p>
              </div>
            </div>

            {/* Images Section */}
            <div className="flex flex-col md:flex-row justify-center md:gap-6">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/shop2sofa5.png"
                  alt="Sofa Image 1"
                  width={400}
                  height={100}
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <Image
                  src="/images/shop2sofa5.png"
                  alt="Sofa Image 2"
                  width={400}
                  height={100}
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>
          <hr className="mt-12" />
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto">
              <h1 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900">
                Related Products
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {allProducts.slice(0, visibleProducts).map((product, index) => (
                  <div
                    key={index}
                    className="relative bg-gray-100 p-4 rounded-lg"
                  >
                    <Image
                      src={product.src}
                      alt={product.alt}
                      width={600}
                      height={400}
                      className="rounded w-full object-cover"
                    />
                    {product.discount && (
                      <span className="absolute top-6 left-56 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}
                      </span>
                    )}
                    {product.badge && (
                      <span className="absolute top-6 left-56  bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.badge}
                      </span>
                    )}
                    <h2 className="text-lg font-medium text-gray-900 mt-4">
                      {product.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {product.description}
                    </p>
                    <p className="text-gray-900 font-bold">
                      {product.price}
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through ml-2">
                          {product.oldPrice}
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
              {visibleProducts < allProducts.length && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleShowMore}
                    className="px-6 py-2 border border-yellow-500 text-yellow-500 font-medium  hover:bg-yellow-100"
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shop2;