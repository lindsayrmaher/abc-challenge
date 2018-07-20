import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AllArticles } from './index'
import SingleSource from './SingleSource';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllArticles} />
      <Route path="/source/:source" component={SingleSource} />
    </Switch>
  )
}

export default Routes

