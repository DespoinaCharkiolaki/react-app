import React from 'react';

class Filter extends React.Component {
    render() {
        return (
            <div className="card">
                <h4>Filter Results</h4>
                <div className="col-12 p-0">
                    <input type="text"
                        className="form-control"
                        placeholder="Filter"
                        onChange={this.props.onFiltering} />
                </div>
            </div>
        )
    }
}

export default Filter;
