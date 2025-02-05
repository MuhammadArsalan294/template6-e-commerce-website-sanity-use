import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";

import { Features } from "@/components/Features";

export default function Blog() {
  return (
    <div className="">
      <div className="relative">
        <Image
          src={"/images/contactpic.png"}
          alt="Contact Header Image"
          width={1500}
          height={100}
          className="w-full h-auto"
        />
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h3 className="font-bold text-xl sm:text-2xl">Blog</h3>
          <div className="flex items-center justify-center text-sm sm:text-base">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Blog</h3>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto p-4">
          {/* Blog Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/blog1.png" // Replace with your image path
                  alt="Blog image"
                  width={1200}
                  height={800}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <span>Admin</span>
                    <span>14 Oct 2022</span>
                    <span>Wood</span>
                  </div>
                  <h2 className="text-xl font-bold mt-2">
                    Going all-in with millennial design
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mus mauris vitae ultricies leo integer malesuada
                    nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi
                    blandit cursus risus at ultrices mi tempus imperdiet. Libero
                    enim sed faucibus turpis in. Cursus mattis molestie a
                    iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                    libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod
                    elementum.
                  </p>
                  <a
                    href="#"
                    className="text-black underline hover:underline mt-2 block "
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/blog2.png" // Replace with your image path
                  alt="Blog image"
                  width={1200}
                  height={800}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <span>Admin</span>
                    <span>14 Oct 2022</span>
                    <span>Handmade</span>
                  </div>
                  <h2 className="text-xl font-bold mt-2">
                    Exploring new ways of decorating
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mus mauris vitae ultricies leo integer malesuada
                    nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi
                    blandit cursus risus at ultrices mi tempus imperdiet. Libero
                    enim sed faucibus turpis in. Cursus mattis molestie a
                    iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                    libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod
                    elementum.
                  </p>
                  <a
                    href="#"
                    className="text-black  underline hover:underline mt-2 block "
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/blog3.png" // Replace with your image path
                  alt="Blog image"
                  width={1200}
                  height={800}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <span>Admin</span>
                    <span>14 Oct 2022</span>
                    <span>Wood</span>
                  </div>
                  <h2 className="text-xl font-bold mt-2">
                    Handmade pieces that took time to make
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mus mauris vitae ultricies leo integer malesuada
                    nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi
                    blandit cursus risus at ultrices mi tempus imperdiet. Libero
                    enim sed faucibus turpis in. Cursus mattis molestie a
                    iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                    libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod
                    elementum.
                  </p>
                  <a
                    href="#"
                    className="text-black  underline hover:underline mt-2 block "
                  >
                    Read more
                  </a>
                  <div className=" flex gap-4 justify-end mt-10">
                    <button className="w-[2.5rem] h-[2.5rem] mb-3   bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-black rounded-xl">
                      1
                    </button>
                    <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-black rounded-xl">
                      2
                    </button>
                    <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-black rounded-xl">
                      3
                    </button>
                    <button className="w-[4rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-black rounded-xl">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-4 mb-8">
                <div className="w-full border border-gray-300 rounded p-3">
                  <a className="flex  justify-end">
                    {" "}
                    <RiSearchLine />
                  </a>
                </div>
                <h3 className="font-bold text-lg mb-4 mt-4 ml-5">Categories</h3>
                <ul className="space-y-2  mt-4 ml-5">
                  <li className="flex justify-between text-gray-700">
                    <span>Crafts</span>
                    <span className="mr-6">2</span>
                  </li>
                  <li className="flex justify-between text-gray-700">
                    <span className="mt-2">Design</span>
                    <span className="mr-6 mt-2">8</span>
                  </li>
                  <li className="flex justify-between text-gray-700">
                    <span className="mt-2">Handmade</span>
                    <span className="mr-6 mt-2">7</span>
                  </li>
                  <li className="flex justify-between text-gray-700">
                    <span className="mt-2">Interior</span>
                    <span className="mr-6 mt-2">1</span>
                  </li>
                  <li className="flex justify-between text-gray-700">
                    <span className="mt-2">Wood</span>
                    <span className="mr-6 mt-2">6</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-bold mb-3 ml-6">Recent Posts</h3>
                <ul>
                  <li className="flex items-center mb-3 ml-6">
                    <div className="w-10 h-10 bg-gray-300 rounded mr-3">
                      <Image
                        src="/images/bloga.png" // Replace with your image path
                        alt="Blog image"
                        width={1200}
                        height={800}
                        className="w-full h-10 object-cover"
                      />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[12px] font-semibold hover:underline"
                      >
                        Going all-in with millennial design
                      </a>
                      <p className="text-xs text-gray-500">03 Aug 2022</p>
                    </div>
                  </li>
                  <li className="flex items-center mb-3 ml-6">
                    <div className="w-10 h-10 bg-gray-300 rounded mr-3">
                      <Image
                        src="/images/blogb.png" // Replace with your image path
                        alt="Blog image"
                        width={1200}
                        height={800}
                        className="w-full h-10 object-cover"
                      />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[12px] font-semibold hover:underline"
                      >
                        Exploring new ways of decorating
                      </a>
                      <p className="text-xs text-gray-500">03 Aug 2022</p>
                    </div>
                  </li>
                  <li className="flex items-center mb-3 ml-6">
                    <div className="w-10 h-10 bg-gray-300 rounded mr-3">
                      <Image
                        src="/images/blogc.png" // Replace with your image path
                        alt="Blog image"
                        width={1200}
                        height={800}
                        className="w-full h-10 object-cover"
                      />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[12px] font-semibold hover:underline"
                      >
                        Handmade pieces that took time to make
                      </a>
                      <p className="text-xs text-gray-500">03 Aug 2022</p>
                    </div>
                  </li>
                  <li className="flex items-center mb-3 ml-6">
                    <div className="w-10 h-10 bg-gray-300 rounded mr-3">
                      <Image
                        src="/images/blogd.png" // Replace with your image path
                        alt="Blog image"
                        width={1200}
                        height={800}
                        className="w-full h-10 object-cover"
                      />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[12px] font-semibold hover:underline"
                      >
                        Modern home in Milan
                      </a>
                      <p className="text-xs text-gray-500">03 Aug 2022</p>
                    </div>
                  </li>
                  <li className="flex items-center mb-3 ml-6">
                    <div className="w-10 h-10 bg-gray-300 rounded mr-3">
                      <Image
                        src="/images/bloge.png" // Replace with your image path
                        alt="Blog image"
                        width={1200}
                        height={800}
                        className="w-full h-10 object-cover"
                      />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[12px] font-semibold hover:underline"
                      >
                        Colorful office redesign
                      </a>
                      <p className="text-xs text-gray-500">03 Aug 2022</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features/>
      
    </div>
  );
}
