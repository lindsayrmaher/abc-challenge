import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import { AllArticles } from './index'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={AllArticles} />
      </Switch>
    )
  }
}

const mapState = (state) => ({ articles: state.articles })

export default withRouter(connect(mapState)(Routes))