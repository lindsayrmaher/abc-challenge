import React, { Component } from 'react'
import { AllArticles } from './components'

export default class App extends Component {
  componentDidMount() {
    // this.props.fetchCollections()
  }

  render() {
    return (
      <div className="App">
        <div>See the top headlines every day</div>
        <div> Organize them by category, if you'd like</div>
        <AllArticles />
      </div>
    );
  }
}

