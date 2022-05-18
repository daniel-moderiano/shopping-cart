import { Product } from '../App'

interface ShopCardProps {
  handleClick: (product: Product) => void;
  product: Product;
}

const ShopCard = ({ handleClick, product }: ShopCardProps) => {

  const changeAddToCartBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const btn = event.target as HTMLButtonElement;
    btn.textContent = 'Added!';
    setTimeout(() => {
      btn.textContent = 'Add to Cart';
    }, 500)
  };

  return (
    <div className="product">
      <div className="product__img-container">
        <img className="product__img" src={product.img} alt="Yo-Yo" />
      </div>
      <h3 className="product__name">{product.name}</h3>
      <div className="product__price">$ {product.price}</div>
      {/* Add a page alert on click to indicate the button has been pressed */}
      <button onClick={(event) => { handleClick(product); changeAddToCartBtn(event) }} className="product__add-btn">Add to Cart</button>
    </div>
  );
}

export default ShopCard;
