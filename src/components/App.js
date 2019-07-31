import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 24c18638fb9b8b209e5409f01521ad6be190a79537ba7ce98be50eed166c46f8'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '20px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;