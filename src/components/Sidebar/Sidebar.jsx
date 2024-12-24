import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import "./Sidebar.css"
import { dataContext } from '../../context/UserContext';

function Sidebar() {
    const[extend,setExtend]=useState(false)
    const {send,prevprompt,newChat}=useContext(dataContext)
    async function loadPrevprompt(prompt) {
      send(prompt)
    }
    
    return (
    <div className="sidebar">
      <GiHamburgerMenu id="ham" onClick={()=>{
        setExtend(prev=>!prev)
      }}/>
      <div className="newchat" onClick={()=>{
          newChat()
      }}>
      <FaPlus />
      {extend?<p>New Chat</p>:""}
      </div>
      {prevprompt.map((item,index)=>{
        return(
          <div className="recent" onClick={()=>{
            loadPrevprompt(item)
          }}>
          <LuMessageCircleMore />
          {extend?<p>{item.slice(0,10)+"..."}</p>:""}
          </div>)
      })}
      
    </div>
  )
}

export default Sidebar
