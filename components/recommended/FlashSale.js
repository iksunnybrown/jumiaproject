"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function FlashSales() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 9,
    minutes: 56,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashSaleProducts = [
    {
      image: "https://ext.same-assets.com/828304586/4272336949.jpeg",
      title: "Oraimo Watch 5 Litev 2.01'' AMOLED Screen Smart Watch",
      price: "15,599",
      originalPrice: "21,000",
      discount: "26%",
      itemsLeft: "18"
    },
    {
      image: "https://ext.same-assets.com/828304586/3059823362.jpeg",
      title: "Oraimo Traveler 4 20000mAh 10.5W Power Bank",
      price: "12,900",
      originalPrice: "30,000",
      discount: "57%",
      itemsLeft: "90"
    },
    {
      image: "https://ext.same-assets.com/828304586/1594404313.jpeg",
      title: "NIVEA Dry Impact Roll-on For Men, 72h- 50ml (Pack Of 3)",
      price: "4,424",
      originalPrice: "6,000",
      discount: "26%",
      itemsLeft: "20"
    },
    {
      image: "https://ext.same-assets.com/828304586/1046911267.jpeg",
      title: "Hc 16 inches Solar Rechargeable Standing Fan(C168) + Solar Panel-White",
      price: "40,599",
      originalPrice: "42,800",
      discount: "5%",
      itemsLeft: "100"
    },
    {
      image: "https://ext.same-assets.com/828304586/593785360.jpeg",
      title: "itel Smart Watch Fit O20 2.04\" HD Display IP68 AI-Powered Black",
      price: "24,173",
      originalPrice: "32,000",
      discount: "24%",
      itemsLeft: "72"
    }
  ];

  return (
    <section className="bg-white pb-6 mt-5">
        {/* Flash Sales Header */}
        <div className="bg-[#E61601] w-full my-4">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
            <h2 className="text-2xl font-bold text-white">Flash Sales</h2>
            <div className="flex items-center gap-2 text-white">
              <span className="text-sm font-medium">Time Left:</span>
              <div className="flex items-center gap-1 flash-sale-timer">
                <span className="bg-amber-600 text-white px-2 py-1 rounded text-sm">
                  {timeLeft.hours.toString().padStart(2, '0')}h
                </span>
                <span>:</span>
                <span className="bg-amber-600 text-white px-2 py-1 rounded text-sm">
                  {timeLeft.minutes.toString().padStart(2, '0')}m
                </span>
                <span>:</span>
                <span className="bg-amber-600 text-white px-2 py-1 rounded text-sm">
                  {timeLeft.seconds.toString().padStart(2, '0')}s
                </span>
              </div>
            </div>
          <a href="#" className="text-white hover:text-green-400 font-medium">
            See All
          </a>
          </div>

        </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Flash Sales Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {flashSaleProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              itemsLeft={product.itemsLeft}
              className="border-2 border-red-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}