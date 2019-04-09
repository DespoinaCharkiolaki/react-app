import React from 'react';
import ProductCard from '../product-card/productCard.js';

class ProductsGrid extends React.Component {

    displayProducts() {
        return this.props.products.map((product, index) => {
            return (
                <ProductCard product={product}
                    key={product.id}
                    onSelectedHeart={this.props.onSelectedHeart}
                    onSelectedCart={this.props.onSelectedCart}
                />
            )
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.products.length
                    ?
                    <div className="row m-0">
                        {this.displayProducts()}
                    </div>
                    :
                    <div className="row">
                        <div className="col-12">
                            <div className="alert alert-danger mt-3" role="alert">No results yet.</div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default ProductsGrid;