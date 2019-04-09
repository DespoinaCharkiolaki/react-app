import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Shop from '../../pages/shop/shop.js';
import Home from '../../pages/home/home.js';
import Favorite from '../../pages/favorities/favorities.js';
import Cart from '../../pages/cart/cart.js';

const Header = (props) => {
    const favorites = props.favorites;
    const cart = props.cart;
    const favsCount = favorites.length;
    const cartCount = cart.length;
    let counterfavs = (favsCount > 0) ? "(" + favsCount + ")" : '';
    let countercart = (cartCount > 0) ? "(" + cartCount + ")" : '';

    return (
        <div>
            <nav className="navbar navbar-toggleable navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">React App</NavLink>
                <div className=" navbar-collapse  mr-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/shop' className="nav-link">
                                Shop
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/favorite' className="nav-link">
                                Favorites {counterfavs}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/cart' className="nav-link" >
                                Cart {countercart}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path='/' render={() => {
                    return <Home onInputChange={props.onInputChange}
                        onSearch={props.onSearch}
                        products={props.products}
                        onSelectedHeart={props.onSelectedHeart}
                        onSelectedCart={props.onSelectedCart}
                    />
                }} />
                <Route path='/shop' render={() => {
                    return <Shop onInputChange={props.onInputChange}
                        onSearch={props.onSearch}
                        products={props.products}
                        onSelectedHeart={props.onSelectedHeart}
                        onSelectedCart={props.onSelectedCart}
                    />
                }} />
                <Route path='/favorite' render={() => {
                    return <Favorite favorites={props.favorites}
                        onSelectedHeart={props.onSelectedHeart}
                        onSelectedCart={props.onSelectedCart}
                    />
                }} />
                <Route path='/cart' render={() => {
                    return <Cart cart={props.cart}
                        onSelectedCart={props.onSelectedCart}
                    />
                }} />
            </Switch>
        </div>
    );
}

export default Header;
