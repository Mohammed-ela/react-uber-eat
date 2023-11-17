import React from "react";
import { useState } from "react";
import { Monheader } from "./Monheader.js";
import "./App.css";
import "./main.css";
import "./index.css";
import Logo from "./logo.svg";
import Macdo from "./images.jpg";
import Kebab from "./kebab.jpg";
import KFC from "./kfc.jpeg";
import Sandwich from "./sandwich.jpg";

// Composant BurgerBlock
function BurgerBlock({ imagePath, burgerName, price, addToCart, removeFromCart}) {
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

// Composant App
function App() {
  const [cart, setCart] = useState(0);

  const addToCart = (quantity) => {
    setCart(cart + quantity);
  };

  const removeFromCart = (quantity) => {
    setCart(cart - quantity);
  };

  return (
    <>
      <Monheader />
      <div className='App'>
        <header>
          <div className='container'>
            <div className='header'>
              <div className='headerlogo'>
                <img className='logi' src={Logo} alt='Image du menu' />
              </div>

              <div className='header--address'>
                <input type='text' name='' id='' placeholder='*****' />
                <p>to</p>
                <input type='text' name='' id='' placeholder='******' />
              </div>

              <div className='header--buttons'>
                <div>
                  <a href='#'>Sign In</a>
                  <a href='#'>Register</a>
                </div>
                <div class='cart-icon'>
                  <div>
                    <iconify-icon icon='ion:cart' width='30' height='30'></iconify-icon>
                  </div>
                  <div id='cart' class='bubble'>
                    {cart}
                  </div>
                </div>
                <div className='header--cart'>
                  <svg viewBox='0 0 40 72' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    {}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className='shops'>
          <div className='container'>
            <div className='shops--title'>
              <h1>Offres du jour</h1>
            </div>

            <div className='shopsblocks'>
              <BurgerBlock
                imagePath={Macdo}
                burgerName='Menu MacDo™'
                price='12,50 €'
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
              <BurgerBlock
                imagePath={Kebab}
                burgerName='Kebab™'
                price='8,50 €'
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
              <BurgerBlock
                imagePath={KFC}
                burgerName='KFC™'
                price='10,00 €'
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
              <BurgerBlock
                imagePath={Sandwich}
                burgerName='Sandwich™'
                price='3,50 €'
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
