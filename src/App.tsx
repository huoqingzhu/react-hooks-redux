import React from 'react'
import './App.scss';
import { HashRouter as Router, Route,Redirect} from 'react-router-dom'
import {Provider, useSelector , useDispatch} from 'react-redux'


import {RouteConfig} from './router/index'
import Login from "./view/login/index"
import store from "./store/index"
function App() {
  return (
    <div className="App">
      <section>
          <Router>
            <Route path="/home"   component={RouteConfig}></Route>
            <Route path="/login"  component={Login}></Route>
            <Redirect to="/login" from="/"></Redirect>
          </Router>
      </section>
    </div>
  );
}
export {App};
