import React from 'react';
import Search from '../search/search.js';
import Filter from '../filter/filter.js';
import Sort from '../sort/sort.js';

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <Search onInputChange={this.props.onInputChange}
                    onSearch={this.props.onSearch} 
                />
                <Filter onFiltering={this.props.onFiltering} />
                <Sort onSort={this.props.onSort}
                    onFiltering={this.props.onFiltering}
                    sortBy={this.props.sortByAsc} 
                />           
            </div>
        );
    }
}

export default Sidebar;