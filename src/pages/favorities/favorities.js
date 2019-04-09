import React from 'react';
import Products from '../../components/products-grid/productsGrid.js';

class Favorite extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-12">
                    <h2 className="m-3">
                        Favorites
                    </h2>
                    <Products
                        products={this.props.favorites}
                        onSelectedHeart={this.props.onSelectedHeart}
                        onSelectedCart={this.props.onSelectedCart}
                    />
                </div>
            </div>
        )
    }
}

export default Favorite;
