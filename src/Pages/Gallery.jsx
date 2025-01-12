import React, { useState, useCallback, useEffect } from "react";

const Gallery = () => {
  const images = [
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/bstx774lpmjtxduxqhna", eventName: "Recursion", year: "2024" },
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/judyqperferzw0cwwlxx", eventName: "Recursion", year: "2024" },
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/v7cs76flr3telin56cnp", eventName: "Recursion", year: "2024" },
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/silw0dppw6s9e8ghvchy", eventName: "Freshers", year: "2023" },
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/kxvbzltr3iqfbqlnsxk4", eventName: "Recursion", year: "2024" },
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/odm9ouahmywnzdhivb7r", eventName: "Freshers", year: "2024" },
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/loi2mm52nnvqntp2fmvf", eventName: "Recursion", year: "2024" },
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ccn7dorhc7gh3snxyfxl", eventName: "Recursion", year: "2024" },
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/qhi8yykwo1jz4xjmsygy", eventName: "Recursion", year: "2024" },
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/oltphkiuq3bb6ufu1afe", eventName: "Recursion", year: "2024" },
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/mi4xin15sgvt9puemdmz", eventName: "Recursion", year: "2024" },
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ilcafreqbz7fzcj0saco", eventName: "Recursion", year: "2024" },
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/dvpvnxsrpozsrguggbsv", eventName: "Alumni Meet", year: "2024" },
    { src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/lxmkrrloj1akzd9u5eeg", eventName: "Onam", year: "2024" },
    
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (selectedImage !== null) {
        if (event.key === "ArrowRight") {
          handleNextImage();
        } else if (event.key === "ArrowLeft") {
          handlePrevImage();
        } else if (event.key === "Escape") {
          handleCloseModal();
        }
      }
    },
    [selectedImage]
  );

  const handleTouchStart = useCallback((e) => {
    setTouchStartX(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartX - touchEndX > 50) {
        handleNextImage(); // Swipe left for next
      } else if (touchEndX - touchStartX > 50) {
        handlePrevImage(); // Swipe right for previous
      }
    },
    [touchStartX]
  );

  useEffect(() => {
    if (selectedImage !== null) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedImage, handleKeyDown]);

  return (
    <div>
      {/* Gallery Grid */}
      <div className="pt-20 columns-2 md:columns-3 gap-4 px-2 py-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid cursor-pointer relative"
            onClick={() => handleImageClick(index)}
          >
            <img
              className="w-full rounded-lg object-cover"
              src={image.src}
              alt={`gallery-photo-${index}`}
            />
            {/* Hover Details */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-lg font-semibold">{image.eventName}</p>
              <p className="text-sm">{image.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full max-w-4xl">
            <img
              className="w-full h-auto max-h-screen rounded-lg object-contain"
              src={images[selectedImage].src}
              alt={`Selected gallery`}
            />
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-70 hover:bg-gray-600 rounded-full flex items-center justify-center"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 2rem)",
                width: "clamp(2rem, 5vw, 3rem)",
                height: "clamp(2rem, 5vw, 3rem)",
              }}
              onClick={handleCloseModal}
            >
              &times;
            </button>
            {/* Previous Button */}
            <button
              className="absolute top-1/2 left-4 text-white text-3xl bg-gray-800 bg-opacity-70 rounded-full p-2 transform -translate-y-1/2 hover:bg-gray-600"
              onClick={handlePrevImage}
            >
              &#8249;
            </button>
            {/* Next Button */}
            <button
              className="absolute top-1/2 right-4 text-white text-3xl bg-gray-800 bg-opacity-70 rounded-full p-2 transform -translate-y-1/2 hover:bg-gray-600"
              onClick={handleNextImage}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
