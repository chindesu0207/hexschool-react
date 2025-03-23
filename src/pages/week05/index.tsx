import { productApi } from "@/api/services/product";
import { Product } from "@/types/product";
import { useCallback, useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { cartApi } from "@/api/services/cart";
import { CartData } from "@/types/cart";
import OrderForm from "./components/OrderForm";
import ReactLoading from "react-loading";

const Week05 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartData, setCartData] = useState<CartData>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await productApi.getAll(1);
      setProducts(res.products ?? []);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);
  const getCart = async () => {
    try {
      setIsLoading(true);
      const res = await cartApi.getAll();
      setCartData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 z-[30] flex items-center justify-center">
          <ReactLoading
            type="spinningBubbles"
            color="#ffffff"
            height={100}
            width={100}
          />
        </div>
      )}
      <div className="container w-4/6 mx-auto flex flex-col gap-16">
        <ProductList products={products} onAddToCart={getCart} />
        {cartData && (
          <>
            <CartList products={products} cart={cartData} onRefresh={getCart} />
            <OrderForm
              hasCart={cartData.carts.length > 0}
              onOrderSubmit={getCart}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Week05;
