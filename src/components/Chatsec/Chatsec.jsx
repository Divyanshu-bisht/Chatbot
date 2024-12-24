import React, { useContext } from 'react'
import "./Chatsec.css"
import { LuSendHorizontal } from "react-icons/lu";
import Darkmode from '../darkmode/Darkmode'
import { dataContext } from '../../context/UserContext';
import ai from "../../assets/ai.png"
import user from "../../assets/user.png"

function Chatsec() {
let{send,input,setInput,resultdata,showResult,recentprompt,loading}=useContext(dataContext)

  return (
    <div className='chatsec'>
      <div className="topsec">
{!showResult?<div className="headings">
          <span>HELLO,</span>
          <span>I'M YOUR OWN ASSISTANT</span>
          <span>What can I help you</span>
        </div>:
        <div className="result">
          <div className="userbox">
            <img src={user} alt="" width="40px"/>
            <p>{recentprompt}</p>
          </div>

          <div className="aibox">
            <img src={ai} alt="" width="40px"/>
            {loading?<div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>:
            <p>{resultdata}</p>}
            
          </div>
        </div>
        }
        
      </div>

      <div className="bottomsec">
        <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter a prompt' value={input}/>
        {input?<button id='sendbtn' onClick={()=>{
          send(input)
        }}><LuSendHorizontal /></button>:null}
        
        <Darkmode/>
      </div>
    </div>
  )
}

export default Chatsec
