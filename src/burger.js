// Composant BurgerBlock
import { useState } from "react";
export function BurgerBlock({ imagePath, burgerName, price, addToCart, removeFromCart}) {
    const [qte, setQte] = useState(0);
  
    const incrementQte = () => {
      setQte(qte + 1);
      addToCart(1); 
    };
    const decrementQte = () => {
      if (qte > 0) {
        setQte(qte - 1);
        removeFromCart(1); // 
      }
    };
  
    return (
      <div className='shops--block'>
        <img href='#' className='menu' src={imagePath} alt={burgerName} />
        <p className='block__desc'>{burgerName}</p>
        <p className='block__prix'>{price}</p>
          <div className='quantity-group'>
              <button className='moin' onClick={decrementQte}>-</button>
              <button className='quantite'>{qte}</button>
              <button className='plus' onClick={incrementQte}>+</button>
          </div>
      </div>
    );
  }