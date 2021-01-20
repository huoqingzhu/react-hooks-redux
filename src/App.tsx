import React,{createContext} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Counter,User,FriendStatus,CounterReducer,CounterRef,Example,UseRefDemof} from "./view/Counter"
import {Tab} from "./view/tab"
// user 组件
// 计数组件
const counter=<Counter initial={30}></Counter>
// const CountContext = createContext(123)

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* 计数组件 */}
      {counter}
      {/* 对象类型*/}
      
      <CounterReducer ></CounterReducer>
      <User></User>
      <CounterRef></CounterRef>
      <FriendStatus id={123}></FriendStatus>
      {/* <CountContext.Provider value={isOnline}>
      </CountContext.Provider> */}
      <Example/>
      <UseRefDemof />
      <Tab></Tab>
      </header>

    </div>
  );
}

export default App;
