import { Product } from '../App';
import ShopCard from './ShopCard';

interface ShopProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const Shop = ({ products, addToCart }: ShopProps) => {

  const handleClick = (product: Product) => {
    addToCart(product);
  }

  return (
    <div className="shop">
      <h1 className="shop__title">Advanced Yo-Yo Collection</h1>
      <div className="products">
        {products.map((product) => (
          <ShopCard
            key={product.id}
            handleClick={handleClick}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
