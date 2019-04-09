import React from 'react';
import Products from '../../components/products-grid/productsGrid.js';

class Home extends React.Component {

    render() {
        return (
            <div>
                <section className="bgimage">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            </div>
                        </div>
                    </div>
                </section>
                <section className="col-lg-10 col-md-10 col-sm-10 col-xs-10 m-auto">
                    <Products products={this.props.products}
                        onSelectedHeart={this.props.onSelectedHeart}
                        onSelectedCart={this.props.onSelectedCart}
                    />
                </section>
            </div>
        );
    }
}

export default Home;
