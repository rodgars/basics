import React, { Component } from 'react';
import SearchBar from './search-bar';
import WeatherList from './weather-list';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <br />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}