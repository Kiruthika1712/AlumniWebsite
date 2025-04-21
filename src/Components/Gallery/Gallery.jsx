import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);

  const fetchGallery = async () => {
    try {
      const [imagesRes, eventsRes] = await Promise.all([
        axios.get("http://127.0.0.1:8000/api/gallery"),
        axios.get("http://127.0.0.1:8000/api/event-categories/5"),
      ]);

      const events = eventsRes.data;
      const images = imagesRes.data.map((img) => {
        const event = events.find((e) => e.id === img.event_id);
        return {
          src: img.image_url,
          eventName: event?.title || "Unknown Event",
          year: event?.event_date?.slice(0, 4) || "Unknown Year",
        };
      });

      setGalleryImages(images);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleImageClick = (index) => setSelectedImage(index);
  const handleCloseModal = () => setSelectedImage(null);
  const handlePrevImage = () => setSelectedImage((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  const handleNextImage = () => setSelectedImage((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));

  const handleKeyDown = useCallback(
    (event) => {
      if (selectedImage !== null) {
        if (event.key === "ArrowRight") handleNextImage();
        else if (event.key === "ArrowLeft") handlePrevImage();
        else if (event.key === "Escape") handleCloseModal();
      }
    },
    [selectedImage]
  );

  const handleTouchStart = useCallback((e) => setTouchStartX(e.touches[0].clientX), []);
  const handleTouchEnd = useCallback(
    (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartX - touchEndX > 50) handleNextImage(); // swipe left
      else if (touchEndX - touchStartX > 50) handlePrevImage(); // swipe right
    },
    [touchStartX]
  );

  useEffect(() => {
    if (selectedImage !== null) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImage, handleKeyDown]);

  return (
    <div>
      {/* Gallery Grid */}
      <div className="pt-20 columns-2 md:columns-3 gap-4 px-2 py-2">
        {galleryImages.map((image, index) => (
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
              src={galleryImages[selectedImage].src}
              alt="Selected gallery"
            />
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
            <button
              className="absolute top-1/2 left-4 text-white text-3xl bg-gray-800 bg-opacity-70 rounded-full p-2 transform -translate-y-1/2 hover:bg-gray-600"
              onClick={handlePrevImage}
            >
              &#8249;
            </button>
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
