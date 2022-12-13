import { useState } from "react";

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Replace with your own images
  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    
  ];

  // Set the interval for automatically changing the image
  setInterval(() => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  }, 2000);

  return (
    <div className="relative h-64 w-full">
      <div
        className="absolute inset-0 h-full w-full bg-gray-600 bg-opacity-25"
      ></div>

      <div className="relative h-full w-full flex items-center justify-center">
        <img
          src={images[currentImageIndex]}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};
export default Carousel
