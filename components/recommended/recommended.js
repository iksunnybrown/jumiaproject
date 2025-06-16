import React from "react";

export default function Recommended() {
  return (
    <div className="pt-5">
      <div className="relative">
        <div className="carousel carousel-center w-full bg-white shadow-lg">
          {/* Slide 1 */}
          <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
            <img
              src="https://ng.jumia.is/cms/0-6-anniversary/2025/CATALOG-ANIMATION-2_1.gif"
              className="rounded-box m-1"
              alt="Phones & Tablets"
            />
            <span className="text-center">Phones & Tablets</span>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/electronics.png"
              className="rounded-box m-1"
              alt="Up to 30% off"
            />
            <span className="text-center">Up to 30% off</span>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/BUY-2_updated.gif"
              className="rounded-box m-1"
              alt="Television"
            />
            <span className="text-center">Television</span>
          </div>

          {/* Slide 4 */}
          <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/phones.png"
              className="rounded-box m-1"
              alt="Groceries"
            />
            <span className="text-center">Groceries</span>
          </div>

          {/* Slide 5 */}
          <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/clearance.png"
              className="rounded-box m-1"
              alt="Refrigerators"
            />
            <span className="text-center">Refrigerators</span>
          </div>

          {/* Slide 6 */}
          <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/appliances.png"
              className="rounded-box m-1"
              alt="Electronics"
            />
            <span className="text-center">Electronics</span>
          </div>

          {/* Slide 7 */}
          <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
            <img
              src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/2016153/1.jpg?7681"
              className="rounded-box m-1"
              alt="Best Sellers"
            />
            <span className="text-center">Best Sellers</span>
          </div>
        </div>

        {/* Prev / Next Buttons */}
        <div className="absolute inset-y-1/2 w-full flex justify-between px-4 pointer-events-none">
          <button className="btn btn-circle pointer-events-auto" onClick={() => document.querySelector('.carousel').scrollBy({ left: -200, behavior: 'smooth' })}>
            ❮
          </button>
          <button className="btn btn-circle pointer-events-auto" onClick={() => document.querySelector('.carousel').scrollBy({ left: 200, behavior: 'smooth' })}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
