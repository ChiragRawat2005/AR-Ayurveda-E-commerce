import { useState } from "react";

const images = [
  "https://www.arayurveda.shop/cdn/shop/files/kajal_copy_1.jpg?v=1779105470&width=600",
  "https://www.arayurveda.shop/cdn/shop/files/hft3jadi-copy-6a1ea0f6d0376.webp?v=1780392319&width=600",
  "https://www.arayurveda.shop/cdn/shop/files/hft4-copy-69e09bd2e64a8.webp?v=1776328233&width=600",
  "https://www.arayurveda.shop/cdn/shop/files/hftcp-copy-69e09bd2e97f7.webp?v=1776328233&width=600",
  "https://www.arayurveda.shop/cdn/shop/files/hft8-copy-694e6efd0fe32.webp?v=1776328233&width=600",
];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-5">
      {/* Main Image */}

      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <img
          src="https://www.arayurveda.shop/cdn/shop/files/kajal_copy_1.jpg?v=1779105470&width=600"
          alt="Product"
          className="h-[550px] w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Thumbnails */}

      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-xl border-2 transition

              ${
                selectedImage === image
                  ? "border-green-700"
                  : "border-gray-200 hover:border-green-500"
              }
            `}
          >
            <img
              src={image}
              alt=""
              className="h-24 w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;