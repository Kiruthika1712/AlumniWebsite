import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/bstx774lpmjtxduxqhna",
      event: "Recursion",
      year: "2024",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/judyqperferzw0cwwlxx",
      event: "Recursion",
      year: "2024",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/v7cs76flr3telin56cnp",
      event: "Recursion",
      year: "2024",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/silw0dppw6s9e8ghvchy",
      event: "Freshers",
      year: "2023",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/kxvbzltr3iqfbqlnsxk4",
      event: "Recursion",
      year: "2024",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/odm9ouahmywnzdhivb7r",
      event: "Farewell",
      year: "2024",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/loi2mm52nnvqntp2fmvf",
      event: "Recursion",
      year: "2024",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ccn7dorhc7gh3snxyfxl",
      event: "Recursion",
      year: "2024",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/qhi8yykwo1jz4xjmsygy",
      event: "Onam",
      year: "2023",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/oltphkiuq3bb6ufu1afe",
      event: "Recursion",
      year: "2024",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/mi4xin15sgvt9puemdmz",
      event: "Recursion",
      year: "2024",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ilcafreqbz7fzcj0saco",
      event: "Recursion",
      year: "2024",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/dvpvnxsrpozsrguggbsv",
      event: "Alumni Meet",
      year: "2024",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/lxmkrrloj1akzd9u5eeg",
      event: "Onam",
      year: "2024",
    },
    {
      src: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/judyqperferzw0cwwlxx",
      event: "Recursion",
      year: "2024",
    },
  ];

  return (
    <div className="pt-20 columns-2 md:columns-3 gap-4 px-2 py-2">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative mb-4 break-inside-avoid group"
        >
          <img
            className="w-full rounded-lg object-cover transition-all duration-300"
            src={image.src}
            alt={`gallery-photo-${index}`}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-center p-4">
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-semibold">{image.event}</p>
              <p className="text-sm mt-2">{image.year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
