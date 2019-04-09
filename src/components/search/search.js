import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="card">
                <h4>Search Product</h4>
                <div className="col-12 p-0">
                    <div className="form-inline">
                        <input type="text" 
                                onChange={this.props.onInputChange}
                                className="form-control col-12"
                                placeholder="Search">
                        </input>
                        <button onClick={this.props.onSearch} 
                                className="btn btn-success col-12 mt-2">Search
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;