import React from 'react';
import { Link } from 'react-router-dom';
import CartTableRow from './cartTableRow.js';

class CartTable extends React.Component {

    displayProducts() {

        return this.props.products.map((product, index) => {
            return (
                <CartTableRow
                    product={product}
                    key={product.id}
                    onSelectedCart={this.props.onSelectedCart}
                />
            )
        });
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.products.length
                        ?
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th className="align-middle text-center">Product</th>
                                    <th className="align-middle text-center">Price</th>
                                    <th className="align-middle text-center">Quantity</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {this.displayProducts()}
                            </tbody>
                        </table>
                        :
                        <div className="text-center">
                            <div className="alert alert-danger" role="alert">Your cart is currently empty.</div>
                            <Link to='/shop'>Return to shop</Link>
                        </div>
                }
            </React.Fragment>
        );
    }
}

export default CartTable;