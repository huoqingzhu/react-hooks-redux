import React,{useReducer,createContext} from 'react'
import './App.scss';
import { HashRouter as Router, Route,Redirect} from 'react-router-dom'
import {State,reducer} from './store/index'
import {RouteConfig} from './router/index'
import Login from "./view/login/index"
let CountContext:any=null
function App() {
  const [state, dispatch] = useReducer(reducer,State);
  CountContext = createContext({dispatch,state})
  return (
    <div className="App">
      <section>
        <CountContext.Provider value={{dispatch,state}}>
          <Router>
            {state.isLogin?<Route path="/home"   component={RouteConfig}></Route>:null}
            <Route path="/login"  component={Login}></Route>
            <Redirect to="/login" from="/"></Redirect>
          </Router>
        </CountContext.Provider>
      </section>
    </div>
  );
}
export {App,CountContext};
