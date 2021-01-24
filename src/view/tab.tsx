import React,{useState,useEffect} from 'react'
import '../App.css';
import {Title} from "./Counter"
import { useHistory } from 'react-router-dom';

const Tab = () => {
  const [type, setType] = useState<string>("day");
  const style=(value:string):{backgroundColor:string}|undefined=>{
    return  value==="day"
            ?(type==="day"?{backgroundColor:"pink"}:undefined)
            :value==="week"
              ?(type==="week"?{backgroundColor:"pink"}:undefined)
              :(type==="year"?{backgroundColor:"pink"}:undefined)
  }
  let history = useHistory();
  useEffect(() => {
    console.log(history)
  })
  const tabChange=(value:string):void=>{
    setType(value)

    // console.log(`/${value}`);
    console.log(history)
    history.push(`/${value}`)
    
  }
  return (
    <div className="component">
      <Title title="Tab切换"></Title>
      <div className="tab">
        <div className={"tabs"} style={style("day")}  onClick={()=>tabChange("day")}>日</div>
        <div className={"tabs"} style={style("week")} onClick={()=>tabChange("week")}>周</div>
        <div className={"tabs"} style={style("year")} onClick={()=>tabChange("year")}>月</div>
      </div>
    </div>
  )
}
export default Tab