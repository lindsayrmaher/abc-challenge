import React, { Component } from 'react'
import { connect } from 'react-redux'
import Routes from './components/Routes'
import { withRouter } from 'react-router-dom'
import { fetchCollections } from './store'

class App extends Component {
  componentDidMount(){
    this.props.fetchCollections()
  }

  render() {
    return (
      <div className="App">
        <div>App has mounted!</div>
        <Routes />
      </div>
    );
  }
}

const mapState = (state) => ({state})

const mapDispatch = { fetchCollections }

export default withRouter(connect(mapState, mapDispatch)(App));
