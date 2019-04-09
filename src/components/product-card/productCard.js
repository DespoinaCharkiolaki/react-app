import React from 'react';
import cartBlack from '../../images/cart-black.svg';
import heartBlack from '../../images/like-black.svg';
import cartBlue from '../../images/cart-blue.svg';
import heartRed from '../../images/like-red.svg';

const ProductCard = (props) => {
    const {
        id,
        name,
        category,
        price,
        selectedfav,
        selectedcart
    } = props.product;

    const source = require.context('../../images/products/', true);
    let image = source(`./${props.product.img}`);

    return (
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 p-0">
            <div className="product-card">
                <div className="col-12 p-0">
                    <img src={image} alt="Avatar" className="img-responsive" width="100%" height="100%" />
                </div>
                <div className="col-12 p-3">
                    <div className="row pc-content">
                        <div className="col-12">
                            <h4>{name}</h4>
                            <h6 className="text-uppercase">{category}</h6>
                        </div>
                    </div>
                    <div className="row pc-footer">
                        <div className="col-6">
                            <h4>{price} €</h4>
                        </div>
                        <div className="col-6">
                            <img src={selectedfav ? heartRed : heartBlack}
                                alt="Add to favorites"
                                className="heart"
                                onClick={() => props.onSelectedHeart(id)} />
                            <img src={selectedcart ? cartBlue : cartBlack}
                                alt="Add to cart"
                                className="cart"
                                onClick={() => props.onSelectedCart(id)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
