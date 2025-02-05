import Image from "next/image";

export default function Range() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto mt-7">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Browse The Range</h1>
          <p className="leading-relaxed text-base mx-auto sm:w-3/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Dining */}
          <div className="p-4">
            <div className="rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                alt="Dining"
                src="/images/range1.png"
                width={400}
                height={400}
                layout="responsive"
                className="object-cover object-center"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">
              Dining
            </h2>
          </div>
          {/* Living */}
          <div className="p-4">
            <div className="rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                alt="Living Room"
                src="/images/range2.png"
                width={400}
                height={400}
                layout="responsive"
                className="object-cover object-center"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">
              Living
            </h2>
          </div>
          {/* Bedroom */}
          <div className="p-4">
            <div className="rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                alt="Bedroom"
                src="/images/range3.png"
                width={400}
                height={400}
                layout="responsive"
                className="object-cover object-center"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">
              Bedroom
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
