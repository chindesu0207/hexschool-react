import { productApi } from "@/api/services/product";
import { useEffect, useState } from "react";
import ProductCard from "../week01/_components/ProductCard";
import ProductPhotos from "../week01/_components/ProductPhotos";
import ProductDetail from "../week01/_components/ProductDetail";
import { Product } from "@/types/product";
import Week02Skeleton from "./Week02Skeleton";

const Week02 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [tempProduct, setTempProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getProducts = async () => {
    try {
      const res = await productApi.getAll();
      setProducts(res.products);
      setTempProduct(res.products[0]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container w-4/6 mx-auto flex flex-col gap-16">
      {isLoading ? (
        <Week02Skeleton />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Week02;
