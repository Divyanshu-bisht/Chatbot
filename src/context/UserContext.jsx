import React, { createContext, useState } from 'react'
import run from '../Gemini'
export const dataContext = createContext()

function UserContext({children}) {

    const [input,setInput]=useState("")
    const [showResult,setShowResult]=useState(false)
    const [loading,setLoading]=useState(false)
    const [resultdata,setResultData]=useState("")
    const [recentprompt,setRecentprompt]=useState("")
    const [prevprompt,setPrevprompt]=useState([])
    function newChat(){
      setShowResult(false)
      setLoading(false)
    }

    async function send(input){
      setResultData("")
      setShowResult(true)
      setRecentprompt(input)
      setLoading(true)
      setPrevprompt(prev=>[...prev,input])
      let response= await run(input)
      setResultData(response.split("**")&&response.split("*"))
      setLoading(false)
      setInput("")
    }
    const data={
        newChat,
        recentprompt,send,input,setInput,loading,setLoading,showResult,setShowResult,resultdata,setResultData,prevprompt,setPrevprompt
    }

  return (
    <>
    <dataContext.Provider value={data}>
      {children}
      </dataContext.Provider>
    </>
  )
}

export default UserContext
