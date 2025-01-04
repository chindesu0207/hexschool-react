"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./_components/ProductCard";
import ProductPhotos from "./_components/ProductPhotos";
import ProductDetail from "./_components/ProductDetail";
import { Product } from "@/types/product";
import Week01Skeleton from "./Week01Skeleton";

const Week01 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [tempProduct, setTempProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getProductData = async () => {
    try {
      const res = await axios.get("/mocks/product.json");
      setProducts(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="container w-4/6 mx-auto flex flex-col gap-16">
      {isLoading && <Week01Skeleton />}
      <div>
        <div className="text-3xl font-bold mb-4">商品清單</div>
        <div className="grid grid-cols-5 gap-4">
          {products.map((item) => (
            <ProductCard
              product={item}
              key={item.id}
              onClick={() => setTempProduct(item)}
            />
          ))}
        </div>
      </div>
      <div>
        {tempProduct ? (
          <div className="grid grid-cols-2 gap-9">
            <ProductPhotos product={tempProduct} />
            <ProductDetail product={tempProduct} />
          </div>
        ) : (
          <div className="flex justify-center w-full">
            <div className="text-gray-500 my-60">請選擇一個商品查看</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Week01;
