import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Header from './components/header/header.js';
import DBPRODUCTS from './mock-products.js'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      products: this.getProducts(),
      favorites: [],
      cart: [],
      // products: []
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onSelectedHeart = this.onSelectedHeart.bind(this);
    this.onSelectedCart = this.onSelectedCart.bind(this);
    this.getProducts = this.getProducts.bind(this);
    // this.onSearch();
  }

  getProducts() {
    return DBPRODUCTS
      .map(product => {
        return {
          ...product,
          selectedfav: false,
          selectedcart: false
        }
      });
  }

  onSelectedHeart(id) {
    const productsChanged = this.state.products.map(product => {
      if (product.id === id)
        product.selectedfav = !product.selectedfav;
      return product;
    });
    this.setState({
      products: productsChanged,
      favorites: productsChanged.filter(product => product.selectedfav)
    });

  }

  onSelectedCart(id) {
    const productsChanged = this.state.products.map(product => {
      if (product.id === id)
        product.selectedcart = !product.selectedcart;
      return product;
    });
    this.setState({
      products: productsChanged,
      cart: productsChanged.filter(product => product.selectedcart)
    });

  }

  onInputChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  // onSearch() {
  //   const searchUrl = 'http://localhost:3001/products?q=' + this.state.searchText
  //   fetch(searchUrl)
  //     .then(res => res.json())
  //     .then(products => {
  //       const productResponse = products.map(product => {
  //         return {
  //           ...product,
  //           selectedfav: this.isProductInFavorites(product.id),
  //           selectedcart: this.isProductInCart(product.id)
  //         }
  //       });
  //       this.setState({ products: productResponse });
  //     })
  //     .catch(error => alert('Error receiving data from DB'));
  // }

  onSearch() {
    const productResponse = DBPRODUCTS
      .filter(p => p.name.includes(this.state.searchText))
      .map(product => {
        return {
          ...product,
          selectedfav: this.isProductInFavorites(product.id),
          selectedcart: this.isProductInCart(product.id)
        }
      });
    this.setState({ products: productResponse });
  }

  isProductInFavorites(id) {
    var favoriteProductsIdsArray = this.state.favorites.map(favoriteProduct => {
      return (favoriteProduct.id);
    });
    return favoriteProductsIdsArray.includes(id);
  }

  isProductInCart(id) {
    var cartedProductsIdsArray = this.state.cart.map(cartedProduct => {
      return (cartedProduct.id);
    });
    return cartedProductsIdsArray.includes(id);
  }


  render() {
    return (
      <BrowserRouter basename="/myapp">
        <div>
          <Header cart={this.state.cart}
            favorites={this.state.favorites}
            onInputChange={this.onInputChange}
            onSearch={this.onSearch}
            products={this.state.products}
            onSelectedHeart={this.onSelectedHeart}
            onSelectedCart={this.onSelectedCart}
          />
        <Redirect to='/#' />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
