"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getCartItems } from "../addtocart/addToCart";

interface Product {
  id: string;
  _id?: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  discountPercentage: number;
  inventory?: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Fetch cart items on component mount
  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  // Handle empty cart state
  if (cartItems.length === 0) {
    return <div className="text-center text-gray-500">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 border p-4 rounded-lg">
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className="rounded-lg"
            />
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;