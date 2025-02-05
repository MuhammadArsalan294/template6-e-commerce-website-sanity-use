"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaShareAlt, FaExchangeAlt, FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { PiCirclesFourFill, PiListBold } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";
import { Features } from "@/components/Features";

interface Product {
  _id: string;
  title: string;
  slug: {
    type: "slug",
    current: string
  }
  description: string;
  imageUrl: string;
  price: number;
  discountPercentage: number;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const query = `*[_type == "product"] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url
        }`;

        const fetchedProducts: Product[] = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="relative">
        <Image
          src="/images/contactpic.png"
          alt="Shop Banner"
          width={1500}
          height={400}
          className="w-full h-[200px] sm:h-[300px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl">Shop</h3>
          <div className="flex items-center justify-center text-sm sm:text-base lg:text-lg">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Shop</h3>
          </div>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="bg-[#f9f5eb] py-4 px-4 md:px-8 lg:px-20 border-b border-gray-300">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left Section */}
          <div className="flex items-center gap-4 flex-wrap">
            <button className="flex items-center gap-2 text-gray-700 hover:text-black">
              <PiListBold />
              <span className="text-sm font-medium">Filter</span>
            </button>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded hover:bg-gray-200">
                <PiCirclesFourFill />
              </button>
              <button className="p-2 rounded hover:bg-gray-200">
                <BsViewList />
              </button>
            </div>
            <div className="text-sm text-gray-700">
              Showing <span className="font-semibold">1–16</span> of{" "}
              <span className="font-semibold">32</span> results
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <label
                htmlFor="show"
                className="text-sm font-medium text-gray-700"
              >
                Show
              </label>
              <input
                id="show"
                type="number"
                defaultValue="16"
                className="w-16 p-1 border rounded text-center text-gray-700"
              />
            </div>
            <div className="flex items-center gap-2">
              <label
                htmlFor="sort"
                className="text-sm font-medium text-gray-700"
              >
                Sort by
              </label>
              <select
                id="sort"
                className="border p-1 rounded text-gray-700 bg-white"
              >
                <option value="default">Default</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-8xl mx-auto px-4 py-8">
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {products.map((product) => {
              const oldPrice =
                product.discountPercentage > 0
                  ? product.price / (1 - product.discountPercentage / 100)
                  : null;

              return (
                <div
                  key={product._id}
                  className="flex flex-col items-center bg-[#F4F5F7] p-4 relative group hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      className="object-cover mb-4 group-hover:opacity-70 transition-opacity"
                    />
                    {product.discountPercentage > 0 && (
                      <div className="absolute top-2 right-2 bg-[#E97171] text-white text-xs font-bold rounded-full w-12 h-12 flex items-center justify-center">
                        {product.discountPercentage}% OFF
                      </div>
                    )}
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-[#B88E2F] font-bold py-2 px-4 w-[202px] h-[48px] flex justify-center items-center">
                      Add to Cart
                    </button>
                    <div className="flex space-x-4 text-[#333333] text-xl">
                      <FaShareAlt />
                      <FaExchangeAlt />
                      <FaRegHeart />
                    </div>
                  </div>
                  <div className="bg-[#F4F5F7] w-full p-4 rounded-lg text-left">
                    <p className="text-lg font-semibold text-[#333333] mb-2">
                      {product.title}
                    </p>
                    <p className="text-sm text-[#666666] mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-lg font-bold text-[#333333]">
                        Rs {product.price.toLocaleString()}
                      </p>
                      {oldPrice && (
                        <p className="text-sm text-[#999999] line-through">
                          Rs {oldPrice.toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="mt-8 px-4 md:px-8 lg:px-20">
        <Features />
      </div>
    </div>
  );
};

export default Shop;

