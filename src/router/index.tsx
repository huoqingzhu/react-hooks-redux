// routes/index.jsx
import React,{Suspense,lazy,useEffect,useContext}from 'react'
import { HashRouter as Router, Route, Switch, Redirect,useHistory} from 'react-router-dom'
import Head from '../components/head/head'//导航栏
import { useSelector} from 'react-redux'


// require.context加载文件生成路由配置
const loadRoutes = (files: __WebpackModuleApi.RequireContext) =>
  files
    .keys()
    .reduce((arr, key) => {
      const routes = files(key).default;
      return typeof routes === "object" ? arr.concat(routes) : arr;
    }, [])
    .sort((prev:{sort:number}, next:{sort:number}) => {
      return prev.sort-next.sort//根据sort 排序
    });
  const children = loadRoutes(require.context("./home", false, /\.tsx$/));
  const RouteConfig = () => {
  const History= useHistory()
  const isLoading = useSelector((state:{isLoading:boolean})=>state.isLoading)
  useEffect(()=>{
    if(!isLoading){
      console.log("没有登录")
      History.push({pathname:"/login",state:{id:3}})
    }
  },[isLoading])
  return (
    <Router>
    <Head></Head>
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
          {children.map((item:any)=>{
            return <Route path={item.path} component={item.component} key={item.path}></Route>
            })}
          <Redirect to="/home/main" from="/home"></Redirect>
        </Switch>
      </Suspense>
    </Router>
  )
}
export {RouteConfig,children}
