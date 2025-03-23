import { useCallback, useEffect, useState } from "react";
import { productAdminApi } from "@/api/services/product";
import { Product } from "@/types/product";
import ProductList from "../week04/_components/ProductList";
import PaginationComponent from "./_components/PaginationComponent";
import ProductFormDailog from "./_components/ProductFormDailog";

const Week04 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const getProducts = useCallback(async () => {
    try {
      const res = await productAdminApi.getAll(currentPage);

      setProducts(res.products ?? []);
      setTotalPages(res.pagination?.total_pages ?? 1);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [currentPage]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const deleteProduct = (deleteProduct: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== deleteProduct),
    );
  };
  return (
    <div className="container w-4/6 mx-auto flex flex-col">
      {isLoading ? (
        <div></div>
      ) : (
        <div className="container mx-auto flex flex-col gap-16">
          <h3 className="text-center">產品列表</h3>
          <div className="flex flex-col">
            <ProductFormDailog
              isCreateMode={true}
              onSuccess={() => {
                if (currentPage !== 1) {
                  setCurrentPage(1);
                } else {
                  getProducts();
                }
              }}
            />
            <ProductList
              products={products}
              onUpdateProduct={() => getProducts()}
              onDeleteProduct={deleteProduct}
            />
          </div>
          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default Week04;
