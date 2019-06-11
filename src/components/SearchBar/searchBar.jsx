import React, { Component } from 'react';

class SearchBar extends Component {
  updateList = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-search" onChange={this.updateList} />
    );
  }
}

export default SearchBar;
