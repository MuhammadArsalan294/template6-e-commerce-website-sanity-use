import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  discountPercentage: number;
}

interface ProductPageProps {
  params: { slug: string };
}

// Fetch product data
async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      id,
      title,
      price,
      description,
      discountPercentage,
      "image": productImage.asset->url,
      "slug": slug.current
    }`,
    { slug }
  );
}

// Product Page Component
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-2xl">
        Product Not Found!
      </div>
    );
  }

  return (
    
    <div className="max-w-screen-xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 ">{product.title}</h1>
          <p className="text-gray-600 text-sm">{product.description}</p>

          {/* Price & Discount */}
          <div className="flex items-center space-x-4">
            <p className="text-2xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full md:w-auto px-6 py-3 bg-[#B88E2F] text-white font-bold text-lg rounded-lg hover:bg-[#996e1f] transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
