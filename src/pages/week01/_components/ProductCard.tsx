import { ProductProps } from "@/types/product";

const ProductCard = ({ product, onClick }: ProductProps) => {
  return (
    <div
      className="flex flex-col border rounded-lg border-gray-300 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="relative w-full aspect-square">
        <img
          className="absolute object-cover size-full"
          src={product.imageUrl}
          alt={product.title}
        />
      </div>
      <div className="flex flex-col justify-between p-3">
        <div>
          <div className="text-xl font-bold">{product.title}</div>
          <div className="text-gray-500">{product.content}</div>
        </div>
        <div className="">
          <div className="text-base text-gray-400 line-through">
            NT${product.origin_price}
          </div>
          <div className="text-2xl text-accent">NT${product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
