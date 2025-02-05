import React from "react";
import Image from "next/image";

export const Features = () => {
  return (
    <div>
      {/* Features Section */}
      <div className="flex flex-wrap items-center justify-around gap-6 p-4 w-full bg-[#F9F1E7]">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left w-full sm:w-auto">
          
          <Image
            src="/images/feature1.png"
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
            src="/images/feature2.png"
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
            src="/images/feature3.png"
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
            src="/images/feature4.png"
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
    </div>
  );
};
