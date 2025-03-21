import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteDailog from "@/pages/week03/_components/DeleteDailog";
import { ProductListProps } from "@/types/product";
import ProductFormDailog from "./ProductFormDailog";

const ProductList = ({
  products,
  onUpdateProduct,
  onDeleteProduct,
}: ProductListProps) => {
  const categories = [...new Set(products.map((item) => item.category))];

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>產品名稱</TableHead>
            <TableHead>類別</TableHead>
            <TableHead>價格</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((item) => (
            <TableRow
              key={item.id}
              className={!item.is_enabled ? "bg-gray-300" : ""}
            >
              <TableCell className="font-bold">{item.title}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.is_enabled ? "啟用" : "停用"}</TableCell>
              <TableCell className="flex gap-4">
                <ProductFormDailog
                  product={item}
                  category={categories}
                  isCreateMode={false}
                  onSuccess={() => onUpdateProduct()}
                />
                <DeleteDailog product={item} onDelete={onDeleteProduct} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ProductList;
