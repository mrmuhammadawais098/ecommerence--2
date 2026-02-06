"use client";
import Image from "next/image";

const products = [
  { name: "Gaming Pc", price: 59, image: "/pc.jpg" },
  { name: "Smart Watch", price: 120, image: "/watch.jpg" },
  { name: "Tab", price: 35, image: "/tab.jpg" },
  { name: "iPhone", price: 999, image: "/iphone.jpg" },
  { name: "Laptop", price: 1299, image: "/laptop.jpg" },
  { name: "ipad", price: 1299, image: "/ipad.jpg" },
 { name: "ps5", price: 1299, image: "/ps5.jpg" },
{ name: "rolex", price: 1299, image: "/rolex.jpg" },

];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black text-white px-10 py-16">

      {/* RGB Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-16 rgb-text">
        
      </h1>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {products.map((item, index) => (
          <div
            key={index}
            className="bg-[#0b0b0b] rounded-xl p-5 border border-pink-600 hover:scale-105 transition duration-300 shadow-lg hover:shadow-pink-600"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={400}
              className="rounded-lg w-full h-[250px] object-contain"
            />

            <h2 className="mt-4 text-xl font-bold">{item.name}</h2>
            <p className="text-pink-500 text-lg">${item.price}</p>

            <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        ))}

      </div>

      {/* RGB Styles */}
      <style jsx>{`
        .rgb-text {
          background: linear-gradient(
            90deg,
            #ff00ff,
            #00ffff,
            #00ff00,
            #ffff00,
            #ff0000,
            #ff00ff
          );
          background-size: 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rgbMove 6s linear infinite;
        }

        @keyframes rgbMove {
          0% { background-position: 0%; }
          100% { background-position: 300%; }
        }
      `}</style>

    </div>
  );
}
