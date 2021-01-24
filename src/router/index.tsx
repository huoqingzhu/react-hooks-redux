// routes/index.jsx
import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import {Counter,User,FriendStatus,CounterReducer,CounterRef,Example,UseRefDemof} from "../view/Counter"
import Tab from '../view/tab'
// const loadRoutes = (files: __WebpackModuleApi.RequireContext) =>
//   files
//     .keys()
//     .reduce((arr, key) => {
//       const routes = files(key).default;
//       return typeof routes === "object" ? arr.concat(routes) : arr;
//     }, [])
//     .sort((prev, next) => (prev || 0) - (next || 0));
// const children = loadRoutes(require.context("./home", false, /\.ts$/));
const RouteConfig = () => {
  return (
    <Router>
      <Router>
        <Tab></Tab>
      </Router>
      <Router>
      <Switch>
          <Route path="/home" component={ UseRefDemof }></Route>
          <Route path="/day"  component={ User }></Route>
          <Route path="/week" component={ FriendStatus}></Route>
          <Route path="/year" component={ CounterReducer}></Route>
          <Redirect to="/home" from="/"></Redirect>
      </Switch>
    </Router>
    </Router>
  )
}
export default RouteConfig
