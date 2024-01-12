import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SubHeading, Menuitem } from '../../components';
import { data, images } from '../../constants';

import "./FullMenu.css"


const FullMenu = () => {
    const navigate = useNavigate();

    const handleFullMenuClick = () => {
      navigate('');
    };
    return(
        <div className="app__specialMenu flex__center section__padding" id="menu">
          <div className="app__specialMenu-title">
            <SubHeading title="Menu that fits your palatte" />
            <h1 className="headtext__cormorant">Today&apos;s Special</h1>
          </div>
      
          <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu_wine  flex__center">
              <p className="app__specialMenu-menu_heading">Wine & Beer</p>
              <div className="app__specialMenu_menu_items">
                {data.wines.map((wine, index) => (
                  <Menuitem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                ))}
              </div>
              <p className="app__specialMenu-menu_heading">Side dish & dessert</p>
              <div className="app__specialMenu_menu_items">
                {data.food1.map((food1, index) => (
                  <Menuitem key={food1.title + index} title={food1.title} price={food1.price} tags={food1.tags} />
                ))}
              </div>
            </div>
            
      
            <div className="app__specialMenu-menu_img">
              <img src={images.menu} alt="menu__img" />
            </div>
      
            <div className="app__specialMenu-menu_cocktails  flex__center">
              <p className="app__specialMenu-menu_heading">Cocktails</p>
              <div className="app__specialMenu_menu_items">
                {data.cocktails.map((cocktail, index) => (
                  <Menuitem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                ))}
              </div>
              <p className="app__specialMenu-menu_heading">Meat</p>
              <div className="app__specialMenu_menu_items">
                {data.food2.map((food2, index) => (
                  <Menuitem key={food2.title + index} title={food2.title} price={food2.price} tags={food2.tags} />
                ))}
              </div>
            </div>
          </div>
      
          <div style={{ marginTop: 15 }}>
            <Link to="/">
            <button type="button" className="custom__button" onClick={handleFullMenuClick}>View Less</button>
            </Link>
          </div>
        </div>
      )};
      

export default FullMenu;

