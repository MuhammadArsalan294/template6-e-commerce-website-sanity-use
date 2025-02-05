
import Header from "@/components/Header";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
export default function Checkout() {
  return (
    <div className="checkout">
      {/* Header Section */}
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
            Checkout
          </h2>
          <div className="flex items-center justify-center text-sm sm:text-base lg:text-lg">
            <h2>Home</h2>
            <IoIosArrowForward />
            <h2>checkout</h2>
          </div>
        </div>
      </div>

      <div className="flex  flex-col md:flex-row gap-8 p-6 md:p-12 bg-gray-50 min-h-screen">
        {/* Billing Details Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-3"
                  placeholder="First Name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-3"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-3"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Country / Region
              </label>
              <select className="w-full border border-gray-300 rounded p-3">
                <option>Sri Lanka</option>
                <option>Pakistan</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Street Address
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-3"
                placeholder="Street Address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Town / City
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-3"
                placeholder="Town / City"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Province</label>
              <select className="w-full border border-gray-300 rounded p-3">
                <option>Western Province</option>
                <option>Sindh</option>
                <option>Jammu and Kashmir</option>
                <option>California</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">ZIP Code</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-3"
                placeholder="ZIP Code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded p-3"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded p-3"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2"></label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-3"
                placeholder="Additional information"
              />
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-6">Product</h2>
            <h2 className="text-2xl font-bold mb-6">Subtotal</h2>
          </div>
          <div className="border-b border-gray-300 pb-4 mb-4">
            <div className="flex justify-between">
              <span>Asgaard sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between mt-4">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total</span>
              <span className="text-yellow-600">Rs. 250,000.00</span>
            </div>
          </div>
          {/* Payment Options */}
          <div className="space-y-4">
            <div>
              <input type="radio" id="bank" name="payment" className="mr-2" />
              <label htmlFor="bank" className="text-sm">
                Direct Bank Transfer
              </label>
              <p className="text-sm text-gray-600 mt-1">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <div>
              <input type="radio" id="bank" name="payment" className="mr-2" />
              <label htmlFor="bank" className="text-sm">
                Direct Bank Transfer
              </label>
            </div>
            <div>
              <input type="radio" id="cash" name="payment" className="mr-2" />
              <label htmlFor="cash" className="text-sm">
                Cash On Delivery
              </label>
            </div>
            <p className="text-sm text-gray-600 mt-4">
            Your personal data will be used to support your experience
            throughout this website and for other purposes described in our{" "}
            <span className="text-black">privacy policy</span>.
          </p>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button className="w-[200px] text-center text-black border border-black rounded-xl py-3">
              Place order
            </button>
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
    </div>
  );
}
