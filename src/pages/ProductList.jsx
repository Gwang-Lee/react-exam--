import ProductCard from '../components/ProductCard';
import { products } from '../datas/products';

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );

}

export default ProductList;