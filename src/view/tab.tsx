import React,{useState} from 'react'
import '../App.css';
import {Title} from "./Counter"
export const Tab = () => {
  const [type, setType] = useState<string>("day");
  const style=(value:string):{backgroundColor:string}|undefined=>{
    return  value==="day"
            ?(type==="day"?{backgroundColor:"pink"}:undefined)
            :value==="week"
              ?(type==="week"?{backgroundColor:"pink"}:undefined)
              :(type==="year"?{backgroundColor:"pink"}:undefined)
  }
  return (
    <div className="component">
      <Title title="Tab切换"></Title>
      <div className="tab">
        <div className={"tabs"} style={style("day")}  onClick={()=>setType("day")}>日</div>
        <div className={"tabs"} style={style("week")} onClick={()=>setType("week")}>周</div>
        <div className={"tabs"} style={style("year")} onClick={()=>setType("year")}>月</div>
      </div>
    </div>
  )
}