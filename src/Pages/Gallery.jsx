import React, { useState, useCallback } from "react";

const Gallery = () => {
  const images = [
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/bstx774lpmjtxduxqhna",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/judyqperferzw0cwwlxx",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/v7cs76flr3telin56cnp",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/silw0dppw6s9e8ghvchy",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/kxvbzltr3iqfbqlnsxk4",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/odm9ouahmywnzdhivb7r",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/loi2mm52nnvqntp2fmvf",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ccn7dorhc7gh3snxyfxl",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/qhi8yykwo1jz4xjmsygy",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/oltphkiuq3bb6ufu1afe",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/mi4xin15sgvt9puemdmz",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ilcafreqbz7fzcj0saco",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/dvpvnxsrpozsrguggbsv",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/lxmkrrloj1akzd9u5eeg",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/judyqperferzw0cwwlxx",
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

  const handleTouchStart = useCallback((e) => {
    setTouchStartX(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      handleNextImage(); // Swipe left for next
    } else if (touchEndX - touchStartX > 50) {
      handlePrevImage(); // Swipe right for previous
    }
  }, [touchStartX]);

  return (
    <div>
      {/* Gallery Grid */}
      <div className="pt-20 columns-2 md:columns-3 gap-4 px-2 py-2">
        {images.map((src, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              className="w-full rounded-lg object-cover"
              src={src}
              alt={`gallery-photo-${index}`}
            />
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
              src={images[selectedImage]}
              alt={`Selected gallery`}
            />
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-70 hover:bg-gray-600 rounded-full flex items-center justify-center"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 2rem)", // Responsive font size
                width: "clamp(2rem, 5vw, 3rem)", // Circle width
                height: "clamp(2rem, 5vw, 3rem)", // Circle height
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
