import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneFilled, TbClockHour4Filled } from "react-icons/tb";

import { Features } from "@/components/Features";

export default function Contact() {
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
          <h3 className="font-bold text-xl sm:text-2xl">Contact</h3>
          <div className="flex items-center justify-center text-sm sm:text-base">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Contact</h3>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center w-full mt-10 px-4">
        <h2 className="font-extrabold text-2xl sm:text-3xl">
          Get In Touch With Us
        </h2>
        <p className="mt-2 text-sm sm:text-base">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us
          <br />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-start leading-6 mt-14 px-4 gap-8">
        {/* Contact Details */}
        <div className="w-full md:w-[18rem] space-y-4 mt-2">
          <div className="flex gap-3 items-start">
            <FaLocationDot size={20} />
            <div>
              <h2 className="font-bold">Address</h2>
              <p className="text-sm sm:text-base">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <TbPhoneFilled size={20} />
            <div>
              <h2 className="font-bold">Phone</h2>
              <p className="text-sm sm:text-base">Mobile: +(84) 546-6789</p>
              <p className="text-sm sm:text-base">Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <TbClockHour4Filled size={20} />
            <div>
              <h2 className="font-bold">Working Time</h2>
              <p className="text-sm sm:text-base">
                Monday-Friday: 9:00 - 22:00
              </p>
              <p className="text-sm sm:text-base">
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-[24rem]">
          <form className="flex flex-col gap-4">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              className="border-gray-200 border-2 p-2 rounded-md"
              placeholder="Name"
            />
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className="border-gray-200 border-2 p-2 rounded-md"
              placeholder="Email"
            />
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              className="border-gray-200 border-2 p-2 rounded-md"
              placeholder="Optional"
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="border-gray-200 border-2 p-2 rounded-md h-24"
              placeholder="Hi! I’d like to ask about..."
            ></textarea>
            <button
              type="submit"
              className="self-start bg-[#B88E2F] text-white p-3 w-[7rem] rounded-md hover:bg-[#a07825] cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-4">
      <Features/>
      </div>
       
    
    </>
  );
}
