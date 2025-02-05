import Image from "next/image";

const Setup = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h1 className="text-center text-2xl font-bold mb-8">
        Share your setup with{" "}
        <span className="text-blue-500">#FuniroFurniture</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-12">
        {/* Images */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/setup1.png"
            alt="Setup 1"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/setup2.png"
            alt="Setup 2"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/setup3.png"
            alt="Setup 3"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/setup4.png"
            alt="Setup 4"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/setup5.png"
            alt="Setup 5"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/setup6.png"
            alt="Setup 6"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/setup7.png"
            alt="Setup 7"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/setup8.png"
            alt="Setup 8"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Setup;
