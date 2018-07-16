import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    // this.props.fetchCollections()
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

// const mapState = (state) => ()

const mapDispatch = {}

export default withRouter(connect(null, mapDispatch)(App));
