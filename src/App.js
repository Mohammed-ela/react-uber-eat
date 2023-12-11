import React, { useState, useEffect } from "react";
import { Monheader } from "./Monheader.js";
import "./main.css";
import "./index.css";
import "./App.css";
import Logo from "./images/logo.svg";
import Macdo from "./images/images.jpg";
import Kebab from "./images/kebab.jpg";
import KFC from "./images/kfc.jpeg";
import Sandwich from "./images/sandwich.jpg";
import { Icon } from '@iconify/react';
import { Produit } from "./burger.js";
import { MyForm, ErrorMessageProvider } from "./forms";

function App() {
  const [cart, setCart] = useState(0);

  const [restaurants, setRestaurants] = useState([
    { name: "Menu MacDo™", image: Macdo, price: "12,50 €", isOpen: true, timeRemaining: 3600 },
    { name: "Kebab™", image: Kebab, price: "8,50 €", isOpen: true, timeRemaining: 2700 },
    { name: "KFC™", image: KFC, price: "10,00 €", isOpen: true, timeRemaining: 10 },
    { name: "Sandwich™", image: Sandwich, price: "3,50 €", isOpen: true, timeRemaining: 4500 },
  ]);

  const addToCart = (quantity) => {
    setCart(cart + quantity);
  };

  const removeFromCart = (quantity) => {
    setCart(cart - quantity);
  };

  useEffect(() => {
    const restaurantIntervalIds = restaurants.map((restaurant, index) => {
      return setInterval(() => {
        setRestaurants((prevRestaurants) => {
          const updatedRestaurants = [...prevRestaurants];
          const updatedRestaurant = { ...updatedRestaurants[index] };

          updatedRestaurant.timeRemaining = Math.max(0, updatedRestaurant.timeRemaining - 1);

          if (updatedRestaurant.timeRemaining === 0) {
            updatedRestaurant.isOpen = false;
          }

          updatedRestaurants[index] = updatedRestaurant;
          return updatedRestaurants;
        });
      }, 1000);
    });

    return () => {
      restaurantIntervalIds.forEach(clearInterval);
    };
  }, [restaurants]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <ErrorMessageProvider>
      <>
        <Monheader />
        <div className="App">
        <header>
          <div className="container">
            <div className="header">
              <div className="headerlogo">
                <img className="logi" src={Logo} alt="Image du menu" />
              </div>

              <div className="header--address">
                <input type="text" name="" id="" placeholder="*****" />
                <p>to</p>
                <input type="text" name="" id="" placeholder="******" />
              </div>

              <div className="header--buttons">
                <div>
                  <a href="#">Sign In</a>
                  <a href="#">Register</a>
                </div>
                <div class="cart-icon">
                  <div>
                  <Icon icon="ion:cart" width="30" height="30" />

                  </div>
                  <div id="cart" class="bubble">
                    {cart}
                  </div>
                </div>
                <div className="header--cart">
                  <svg viewBox="0 0 40 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {}
                  </svg>
                </div>
              </div>
            </div>
          </div>
          </header>
          <section className="shops">
            <div className="container">
              <div className="shops--title">
                <h1>Offres du jour</h1>
                {/* temps global */}
                {/* <p>Offre disponible pendant : {formatTime(restaurants[0].timeRemaining)}</p> */}
              </div>

              <div className="shopsblocks">
                {restaurants.map((restaurant, index) => (
                  <div key={index} className="restaurant-item">
                    {restaurant.isOpen ? (
                      <>
                        <Produit
                          imagePath={restaurant.image}
                          burgerName={restaurant.name}
                          price={`Prix: ${restaurant.price}`}
                          addToCart={addToCart}
                          removeFromCart={removeFromCart}
                        />
                        <p>{`Le restaurant est ouvert - Temps restant : ${formatTime(restaurant.timeRemaining)}`}</p>
                      </>
                    ) : (
                      <>
                        <Produit
                          imagePath={restaurant.image}
                          burgerName={restaurant.name}
                          price={`Prix: ${restaurant.price}`}
                        />
                        <p>Le restaurant est fermé</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="form">
        <h1 className="title-form">Formulaires</h1>
        <p className="paragraphe-form">il s'agit du nom que vous souhaitez que les autres utilisateurs utilisent pour vous désigner</p>
            {/* Formulaire */}
            <MyForm />
          </section>
        </div>
      </>
    </ErrorMessageProvider>
  );
}

export default App;