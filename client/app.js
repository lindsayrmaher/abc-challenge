import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Routes } from './components'

class App extends Component {
  componentDidMount() {
    // this.props.fetchCollections()
  }

  render() {
    return (
      <div className="App">
        <div>See the top headlines every day</div>
        <div> Organize them by category, if you'd like</div>
        <Routes />
      </div>
    );
  }
}

const mapState = (state) => ({ articles: state.articles })

const mapDispatch = {}

export default withRouter(connect(mapState, mapDispatch)(App));
