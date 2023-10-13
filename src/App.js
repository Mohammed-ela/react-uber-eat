import React from "react";
import "./App.css";
import "./main.css";
import "./index.css";
import burgerImage from "./logo.svg";
import burgerImages from "./images.jpg";

// Composant BurgerBlock
function BurgerBlock({ imagePath, restaurantName, burgerName, price }) {
    return (
        <div className='shops--block'>
            <img src={imagePath} alt={restaurantName} />
            <a href='#'>{restaurantName}</a>
            <p className='block__desc'>{burgerName}</p>
            <p className='block__prix'>{price}</p>
        </div>
    );
}

// Composant App
function App() {
    return (
        <div className='App'>
            {/* Votre contenu HTML */}
            <header>
                <div className='container'>
                    <div className='header'>
                        <div className='headerlogo'>
                            <img
                                class='logi'
                                src={burgerImage}
                                alt='Image de burger'
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
                        {/* Réutilisation du composant BurgerBlock pour afficher 4 blocs de burgers similaires */}
                        <BurgerBlock
                            imagePath={burgerImages}
                            burgerName='BIG MAC™'
                            price='11,45 €'
                        />
                        <BurgerBlock
                            imagePath={burgerImages}
                            burgerName='BIG MAC™'
                            price='11,45 €'
                        />
                        {
                            <BurgerBlock
                                imagePath={burgerImages}
                                burgerName='BIG MAC™'
                                price='11,45 €'
                            />
                        }
                        {
                            <BurgerBlock
                                imagePath={burgerImages}
                                burgerName='BIG MAC™'
                                price='11,45 €'
                            />
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
