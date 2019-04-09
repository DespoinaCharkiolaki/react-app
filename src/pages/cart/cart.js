import React from 'react';
import CartTable from '../../components/cart-table/cartTable.js';

class Cart extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-12">
                    <h2 className="m-3">
                        Cart
                    </h2>
                    <CartTable
                        products={this.props.cart}
                        onSelectedCart={this.props.onSelectedCart}
                    />
                </div>
            </div>
        )
    }
}

export default Cart;
