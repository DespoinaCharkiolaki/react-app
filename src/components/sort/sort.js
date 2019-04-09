import React from 'react';

class Sort extends React.Component {
    render() {
        const sortType = (this.props.sortBy === true) ? 'Descending' : 'Αscending';
        return (
            <div className="card">
                <h4>Sort Results</h4>
                <div className="col-12 p-0">
                    <div className="">
                        <button className="btn btn-primary btn-block"
                                onClick={this.props.onSort}> {sortType} Price 
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sort;
