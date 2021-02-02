import React,{useState,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import {children} from '../../router/index'
import {Provider, useSelector , useDispatch} from 'react-redux'

import "./head.scss"
const Head=()=>{
  const [current, setCurrent] = useState<string>("/home/main"); 
  const dispatch = useDispatch()
  const handleClick=(e:any)=>{
    setCurrent(e.key)
    history.push(`${e.key}`)
  };
  const out=()=>{
    dispatch({type:"login",isLoading:false})
  }
  let history = useHistory();
  return (
      <div className="head">
        <div className="menu">
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            {children.map((item:{path:string,meta:{title:string,iocn:any}})=>{
          return <Menu.Item key={item.path} icon={item.meta.iocn}>
                      {item.meta.title}
                </Menu.Item>
        })}
        </Menu>
        </div>
        <div className="out" onClick={out}>退出登陆</div>
      </div>
  );
}
export default Head