import React from 'react';
import Counter from '../counter/counter';

const CartTableRow = (props) => {
    const {
        id,
        img,
        name,
        price
    } = props.product;

    const source = require.context('../../images/products/', true);
    let image = source(`./${props.product.img}`);

    return (
    <tr>
        <td className="align-middle border-0">
            <button type="button"
                className="btn btn-danger btn-sm"
                onClick={() => props.onSelectedCart(id)}>        
                    <span className="glyphicon glyphicon-trash"></span> &#10006; Delete 
            </button>
        </td >
        <td className="align-middle">
            <img src={image} alt="Product" className="img-responsive" width="100px" height="125px" />
        </td>
        <td className="align-middle">
            {name}
        </td>
        <td className="align-middle">
            {price} €
        </td>
        <td className="align-middle">
            <Counter />
        </td>
    </tr>
    )
}

export default CartTableRow;
