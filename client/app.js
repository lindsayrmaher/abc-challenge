import React, { Component } from 'react'
import { Routes } from './components'

export default class App extends Component {
  componentDidMount() {
    // this.props.fetchCollections()
  }

  render() {
    return (
      <div className="App container center-align">
        <h1>Top Headlines from NewsAPI</h1>
        <h4> Click on a source name to see the top articles from different outlets!</h4>
        <Routes />
      </div>
    );
  }
}

