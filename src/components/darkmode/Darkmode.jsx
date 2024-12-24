import React, { useEffect, useState } from 'react'
import { IoSunny } from "react-icons/io5";
import "./Darkmode.css"

function Darkmode() {
    const[mode,setMode]=useState("darkmode")
    function toggle(){
        if(mode==="darkmode"){
            setMode("lightmode")
        }
        else{
            setMode("darkmode")
        }
    }

    useEffect(()=>{
        document.body.className=mode
    },[mode])
  return (
   <button onClick={()=>{
    toggle()
   }} className="darkmodebtn"><IoSunny /></button>
  )
}

export default Darkmode
