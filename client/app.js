import React, { Component } from 'react'
import { Routes } from './components'

export default class App extends Component {
  componentDidMount() {
    // this.props.fetchCollections()
  }

  render() {
    return (
      <div className="App container center-align">
        <h1>Top Headlines</h1>
        <h4>These are the most recent top stories from around the news!</h4>
        <Routes />
      </div>
    );
  }
}

