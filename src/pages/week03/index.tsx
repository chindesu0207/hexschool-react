import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productApi } from "@/api/services/product";
import { Product } from "@/types/product";
import AddProduct from "./_components/AddProduct";
import ProductList from "./_components/ProductList";

const Week03 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState("list");

  const getProducts = async () => {
    try {
      const res = await productApi.getAll();
      setProducts(res.products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    if (activeTab === "list") getProducts();
  }, [activeTab]);
  const updateProduct = (updatedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };
  const deleteProduct = (deleteProduct: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== deleteProduct)
    );
  };
  return (
    <div className="container w-4/6 mx-auto flex flex-col">
      {isLoading ? (
        <div></div>
      ) : (
        <div>
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value)}
          >
            <TabsList className="w-full mx-auto bg-transparent">
              <TabsTrigger value="create">新增產品</TabsTrigger>
              <TabsTrigger value="list">產品列表</TabsTrigger>
            </TabsList>
            <TabsContent value="create">
              <AddProduct onAddProduct={() => setActiveTab("list")} />
            </TabsContent>
            <TabsContent value="list">
              <ProductList
                products={products}
                onUpdateProduct={updateProduct}
                onDeleteProduct={deleteProduct}
              />
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Week03;
