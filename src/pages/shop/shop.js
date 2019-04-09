import React from 'react';
import Sidebar from '../../components/sidebar/sidebar.js';
import Products from '../../components/products-grid/productsGrid.js';

class Shop extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: props.products,
        };

        this.onSort = this.onSort.bind(this);
        this.onFiltering = this.onFiltering.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.products !== this.state.products) {
            this.setState({ products: nextProps.products });
        }
    }

    onSort() {
        let sortedList = this.state.products.sort(this.compare);

        if (this.state.sortByAsc)
            sortedList = sortedList.reverse();

        this.setState({
            products: sortedList,
            sortByAsc: !this.state.sortByAsc
        });
    }

    compare(a, b) {
        if (a.price < b.price)
            return -1;
        if (a.price > b.price)
            return 1;
        return 0;
    }

    onFiltering(event) {
        const textInserted = event.target.value.toLowerCase();
        const filteredResults = this.props.products.filter((products) => {
            return products.name.toLowerCase().includes(textInserted);
        });
        this.setState({
            products: filteredResults
        });
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 m-auto">
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <Sidebar
                                onInputChange={this.props.onInputChange}
                                onSearch={this.props.onSearch}
                                onSort={this.onSort}
                                onFiltering={this.onFiltering}
                                sortByAsc={this.state.sortByAsc} 
                                products={this.state.product}
                            />
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <Products 
                                products={this.state.products}
                                onSelectedHeart={this.props.onSelectedHeart}
                                onSelectedCart={this.props.onSelectedCart}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;
