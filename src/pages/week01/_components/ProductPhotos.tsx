import { ProductProps } from "@/types/product";
import { useEffect, useState } from "react";

const ProductPhotos = ({ product }: ProductProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string>(product.imageUrl);
  const photos: string[] = [
    product.imageUrl,
    ...product.imagesUrl.filter((item) => item !== ""),
  ];

  useEffect(() => {
    setSelectedPhoto(product.imageUrl);
  }, [product]);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full aspect-square mx-auto">
        <img
          className="absolute object-cover size-full"
          src={selectedPhoto}
          alt={product.title}
        />
      </div>
      <div className="flex w-full mx-auto gap-3">
        {photos.map((photo, index) => {
          return (
            <div
              className="relative w-full aspect-square cursor-pointer"
              key={index}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                className="absolute object-cover size-full"
                src={photo}
                alt={product.title + index}
              />
            </div>
          );
        })}
        {photos.length < 3
          ? [...Array(3 - photos.length)].map((_, index) => {
              return <div className="w-full bg-transparent" key={index}></div>;
            })
          : ""}
      </div>
    </div>
  );
};

export default ProductPhotos;
