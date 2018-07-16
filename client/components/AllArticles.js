import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchArticles } from '../store'

class AllArticles extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.setState(
      () => { this.props.fetchArticles() })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <div></div>
      </div>
    )
  }
}

// const mapState

const mapDispatch = { fetchArticles }

export default withRouter(connect(null, mapDispatch)(AllArticles))
