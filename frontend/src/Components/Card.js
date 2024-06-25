import React, { useState } from 'react';
import './Card.css';
import blueImage from '../assets/images/black.png';
import yellowImage from '../assets/images/red.png';
import blackImage from '../assets/images/black.png';
import whiteImage from '../assets/images/white.png';

const Card = () => {
    const [activeColor, setActiveColor] = useState('cremson');
    const [activeImage, setActiveImage] = useState(blueImage);

    const handleColorClick = (color) => {
        setActiveColor(color);
        switch(color) {
            case 'cremson':
                setActiveImage(blueImage);
                break;
            case 'yellow':
                setActiveImage(yellowImage);
                break;
            case 'black':
                setActiveImage(blackImage);
                break;
            case 'white':
                setActiveImage(whiteImage);
                break;
            default:
                setActiveImage(blueImage);
        }
    };

    return (
        <div className="card">
            <div className="left">
                <img className={`cremson ${activeColor === 'cremson' ? 'active' : ''}`} src={blueImage} alt="Blue"/>
                <img className={`yellow ${activeColor === 'yellow' ? 'active' : ''}`} src={yellowImage} alt="Yellow"/>
                <img className={`black ${activeColor === 'black' ? 'active' : ''}`} src={blackImage} alt="Black"/>
                <img className={`white ${activeColor === 'white' ? 'active' : ''}`} src={whiteImage} alt="White"/>
            </div>
            <div className="right">
                <div className="product-info">
                    <div className="product-name">
                        <h1>NIKE Air Max 2020</h1>
                        <div className="action">
                            <i className="fa fa-search"></i>
                            <i className="fa fa-user"></i>
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                    </div>
                    <div className="details">
                        <h3>Winter Collection</h3>
                        <h2>Snake Collection</h2>
                        <h4>
                            <i className="fa fa-dollar"></i>
                        </h4>
                        <h4 className="discount">
                            <i className="fa fa-dollar"></i>
                            200
                        </h4>
                    </div>
                    <ul>
                        <li className="size">7</li>
                        <li className="size active">8</li>
                        <li className="size">9</li>
                        <li className="size">10</li>
                        <li className="size">11</li>
                    </ul>
                    <ul id="colors">
                        <li>Color</li>
                        <li 
                            className={`color ${activeColor === 'cremson' ? 'active' : ''}`} 
                            data-color="cremson" 
                            style={{ '--color': '#02a2ca' }}
                            onClick={() => handleColorClick('cremson')}
                        ></li>
                        <li 
                            className={`color ${activeColor === 'yellow' ? 'active' : ''}`} 
                            data-color="yellow" 
                            style={{ '--color': '#fec60f' }}
                            onClick={() => handleColorClick('yellow')}
                        ></li>
                        <li 
                            className={`color ${activeColor === 'black' ? 'active' : ''}`} 
                            data-color="black" 
                            style={{ '--color': '#000000' }}
                            onClick={() => handleColorClick('black')}
                        ></li>
                        <li 
                            className={`color ${activeColor === 'white' ? 'active' : ''}`} 
                            data-color="white" 
                            style={{ '--color': '#ffffff' }}
                            onClick={() => handleColorClick('white')}
                        ></li>
                    </ul>
                    <span className="footer">
                        <i className="fa fa-shopping-bag"></i>
                        Buy Now
                    </span>
                    <span className="footer">
                        <i className="fa fa-shopping-cart"></i>
                        Add to cart
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
