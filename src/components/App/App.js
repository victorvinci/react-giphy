import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from '../SearchBar/searchBar';
import Gif from '../Gif/gif';
import GifList from '../GifList/gifList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "h9KtiB6DgiS2s"
    };
  }

  search = (query) => {
    giphy('pDErXezbEJ56b0ySaZY0NAh1A3MxUTDm').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
