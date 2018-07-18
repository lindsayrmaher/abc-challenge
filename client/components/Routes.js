import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { AllArticles } from './index'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={AllArticles} />
        <Route path='/:source' />
      </Switch>
    )
  }
}

