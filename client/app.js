import React, { Component } from 'react'
import { AllArticles } from './components'

export default class App extends Component {
  componentDidMount() {
    // this.props.fetchCollections()
  }

  render() {
    return (
      <div className="App">
        <h1>Top Headlines from NewsAPI</h1>
        <p> Organize them by category, if you'd like</p>
        <AllArticles />
      </div>
    );
  }
}

