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


// Composant 
function BurgerBlock({ imagePath, restaurantName, burgerName, price }) {

    const [qte, setQte] = useState(0);

    const incrementQte = () => {
        setQte(qte + 1);
    }

    return (
        <div className='shops--block'>
            <img className='menu' src={imagePath} alt={restaurantName} />
            <a href='#'>{restaurantName}</a>
            <p className='block__desc'>{burgerName}</p>
            <p className='block__prix'>{price}</p>
            <button className='quantite' onClick={incrementQte}>
                {qte}
            </button>
        </div>
    );
}

// Composant App
function App() {
    return (
<>
        <Monheader/>
        <div className='App'>
            {/* Votre contenu HTML */}
            <header>
                <div className='container'>
                    <div className='header'>
                        <div className='headerlogo'>
                            <img
                                class='logi'
                                src={Logo}
                                alt='Image du menu'
                            />
                        </div>

                        <div className='header--address'>
                            <input
                                type='text'
                                name=''
                                id=''
                                placeholder='*****'
                            />
                            <p>to</p>
                            <input
                                type='text'
                                name=''
                                id=''
                                placeholder='******'
                            />
                        </div>

                        <div className='header--buttons'>
                            <div>
                                <a href=''>Sign In</a>
                                <a href=''>Register</a>
                            </div>
                            <div className='header--cart'>
                                <svg
                                    viewBox='0 0 40 72'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    {/* ... (votre contenu SVG) */}
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
                             
                        />
                        <BurgerBlock
                            imagePath={Kebab}
                            burgerName='Kebab™'
                            price='8,50 €'
                          
                        />
                        
                            <BurgerBlock
                                imagePath={KFC}
                                burgerName='KFC™'
                                price='10,00 €'
                                
                            />
                       
                            <BurgerBlock
                                imagePath={Sandwich}
                                burgerName='Sandwich™'
                                price='3,50 €'
                            
                            />
                        
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default App;
