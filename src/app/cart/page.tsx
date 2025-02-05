import Image from "next/image";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
  return (
    <>
      <div className="relative">
        <Image
          src={"/images/contactpic.png"}
          alt="Contact Header Image"
          width={1500}
          height={100}
          className="w-full h-auto"
        />
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">Cart</h2>
          <div className="flex items-center justify-center text-sm sm:text-base lg:text-lg">
            <h2>Home</h2>
            <IoIosArrowForward />
            <h2>Cart</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6 w-full max-w-7xl mx-auto mt-10 px-4 mb-12">
        {/* Left Side - Products */}
        <div className="w-full md:w-[65%]">
          {/* Table Header */}
          <div className="productDetails flex justify-around items-center p-4 bg-[#F9F1E7] rounded-md text-sm md:text-base lg:text-lg">
            <h2 className="ml-[50px] md:ml-[110px]">Product</h2>
            <h2 className="ml-10">Price</h2>
            <h2>Quantity</h2>
            <h2 className="mr-6">Subtotal</h2>
          </div>

          {/* Product Item */}
          <div className="mt-4 bg-white p-4 shadow-md rounded-md flex flex-col sm:flex-row justify-between items-center gap-4 text-sm md:text-base lg:text-lg">
            <Image
              src="/images/cart1.png"
              width={100}
              height={100}
              alt="Asgaard Sofa"
              className="rounded"
            />
            <p className="flex-1 text-center">Asgaard Sofa</p>
            <p className="flex-1 text-center md:mr-8">Rs. 250,000.00</p>
            <input
              className="border border-gray-300 rounded-md p-1 text-center w-16 md:mr-8"
              type="number"
              defaultValue={1}
            />
            <p className="flex-1 text-center">Rs. 250,000.00</p>
            <p>
              {" "}
              <MdDelete className="text-[#B88E2F]" />
            </p>
          </div>
        </div>

        {/* Right Side - Cart Totals */}
        <div className="cartTotal bg-[#F9F1E7] w-full md:w-[30%] rounded-md p-6 shadow-lg text-sm md:text-base lg:text-lg">
          <h2 className="font-bold text-lg md:text-xl text-center">
            Cart Totals
          </h2>
          <p className="mt-8 text-center">
            <span className="font-bold">Subtotal:</span> Rs. 250,000.00
          </p>
          <p className="mt-5 text-center">
            <span className="font-bold">Total:</span> Rs. 250,000.00
          </p>

          <div className="flex justify-center mt-5">
            
            <Link href="/checkout">
            <button className="px-6 py-2 w-auto sm:w-auto border border-black text-black font-medium rounded hover:bg-yellow-100">
              Check Out
            </button>
            </Link>
              
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-5 mb-2 flex flex-wrap items-center justify-around gap-6 p-4 w-full bg-[#F9F1E7]">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left w-full sm:w-auto">
          <Image
            src="/images/contact1.png"
            width={40}
            height={40}
            alt="High Quality Materials"
          />
          <div>
            <h4 className="font-bold text-base sm:text-lg lg:text-xl">
              High Quality
            </h4>
            <p className="text-sm sm:text-base lg:text-lg">
              Crafted from top materials
            </p>
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
            <h4 className="font-bold text-base sm:text-lg lg:text-xl">
              Warranty Protection
            </h4>
            <p className="text-sm sm:text-base lg:text-lg">Over 2 years</p>
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
            <h4 className="font-bold text-base sm:text-lg lg:text-xl">
              Free Shipping
            </h4>
            <p className="text-sm sm:text-base lg:text-lg">Order over 150 $</p>
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
            <h4 className="font-bold text-base sm:text-lg lg:text-xl">
              24 / 7 Support
            </h4>
            <p className="text-sm sm:text-base lg:text-lg">Dedicated support</p>
          </div>
        </div>
      </div>
      
    </>
  );
}
