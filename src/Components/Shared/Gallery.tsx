import { useState } from "react";

const Gallery = () => {
  const images = [
    "/images/pic.jpg",
    "/images/pic2.jpg",
    "/images/pic2.jpg",
    "/images/pic2.jpg",
    "/images/pic.jpg",
    "/images/pic2.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (image: string) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <main className="min-h-screen w-full">
        {/* Laptop View */}
        <section className="hidden lg:flex justify-around">
          {/* First Column */}
          <div className="flex flex-col items-start gap-6">
            <img
              src={images[0]}
              alt=""
              className="w-[400px] shadow-lg hover:scale-105 transition-transform"
              onClick={() => openImage(images[0])}
            />
            <img
              src={images[1]}
              alt=""
              className="w-[320px] rounded-full shadow-lg hover:scale-105 transition-transform"
              onClick={() => openImage(images[1])}
            />
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-center gap-6">
            <img
              src={images[2]}
              alt=""
              className="w-[320px] rounded-full shadow-lg hover:scale-105 transition-transform"
              onClick={() => openImage(images[2])}
            />
            <img
              src={images[3]}
              alt=""
              className="w-[90%] h-[240px] mt-16 shadow-lg hover:scale-105 transition-transform"
              onClick={() => openImage(images[3])}
            />
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-start gap-6">
            <img
              src={images[4]}
              alt=""
              className="w-[300px] mt-40 shadow-lg hover:scale-105 transition-transform"
              onClick={() => openImage(images[4])}
            />
          </div>

          {/* Fourth Column */}
          <div className="flex flex-col items-center gap-6">
            <img
              src={images[5]}
              alt=""
              className="w-[320px] h-[320px] rounded-full shadow-lg hover:scale-105 transition-transform"
              onClick={() => openImage(images[5])}
            />
            <img
              src={images[4]}
              alt=""
              className="w-[240px] h-[440px] mt-16 shadow-lg hover:scale-105 transition-transform"
              onClick={() => openImage(images[1])}
            />
          </div>
        </section>

        {/* Phone View */}
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openImage(image)}
              />
            </div>
          ))}
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative bg-white rounded-lg shadow-lg max-w-[60vw] max-h-[80vh]">
              <button
                className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 focus:outline-none hover:bg-gray-600"
                onClick={closeImage}
              >
                ✕
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                className="rounded-lg w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Gallery;
