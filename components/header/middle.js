import React, { useEffect, useState } from "react";

const DaisyCarousel = () => {
  const slideCount = 5;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideImages = [
    "https://ng.jumia.is/cms/0-1-initiatives/Jumia-delivery/712X384.png",
    "https://ng.jumia.is/cms/0-6-anniversary/2025/JA25_LIVE-NOW_712x384-new.gif",
    "https://ng.jumia.is/cms/0-6-anniversary/2025/Brand_Day/Nivea/NIVEA_FS_712x384.jpg",
    "https://ng.jumia.is/cms/0-6-anniversary/2025/Brand_Day/Nivea/NIVEA_GEN_712x384.png",
    "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/June/712X384.jpg",
  ];

  return (
    <div className="w-full lg:w-[59%] mx-auto overflow-hidden relative rounded-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slideImages.map((src, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <img src={src} alt={`slide${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4">
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)
          }
          className="btn btn-circle"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slideCount)}
          className="btn btn-circle"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default DaisyCarousel;
