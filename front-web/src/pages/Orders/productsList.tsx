import ProductCard from "./productCard";
import { Product } from "./types";

type Props = {
  products: Product[];
};

const ProductsList = ({ products }: Props) => {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsList;
