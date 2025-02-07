"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { addToCart } from "../addtocart/addToCart";
import Product from "../product/page";

interface Product {
  id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  image: string;
  price: number;
  tags: string[];
  discountPercentage: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const query = `*[_type == "product"] {
          id,
          title,
          price,
          description,
          discountPercentage,
          "image": productImage.asset->url,
          "slug": slug.current
        }[0..7]`;

        const fetchedProducts: Product[] = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProduct();
  }, []);

  const handleAddTOCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product)
    alert("Product added")
   
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 text-center">
      <h2 className="text-[40px] text-[#3A3A3A] font-bold mb-8">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`}>
            <div className="flex flex-col items-center bg-[#F4F5F7] p-4 relative group cursor-pointer shadow-lg rounded-lg">
              <div className="relative w-full h-[301px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="mb-4 group-hover:opacity-70 transition-opacity object-cover rounded-lg"
                />
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white text-[#B88E2F] font-bold py-2 px-4 w-[202px] h-[48px] flex justify-center items-center shadow-md bg-gradient-to-r rounded-lg  hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={(e) => handleAddTOCart(e, product)}
                >
                  Add to Cart
                </button>
              </div>

              <div className="w-full p-4 text-left">
                <p className="text-lg font-semibold text-[#333333] mb-2">{product.title}</p>
                <p className="text-sm text-[#666666] mb-2 line-clamp-2">{product.description}</p>
                <p className="text-lg font-bold text-[#333333]">Rp {product.price.toLocaleString()}</p>
              </div>
              
            </div>
          </Link>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <Link href="/shop" passHref>
          <button className="w-[245px] h-[48px] bg-white border-[1px] border-[#B88E2F] text-[#B88E2F] hover:text-white hover:bg-[#B88E2F] transition-colors">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
