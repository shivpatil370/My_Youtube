import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import {useDispatch, useSelector} from "react-redux"
import { addMessage } from './utils/chatSlice';
import { generateRandomname } from './utils/helper';
import { makeRandomMessages } from './utils/helper';

const LiveChat = () => {
  const [LiveMessage, setLiveMessage]=useState("")
  const dispatch = useDispatch();

  const ChatMessages=useSelector((store)=> store.chat.messages)

useEffect(() => {
    const interval=setInterval(()=>{
      // API POLLING:-
      console.log("api polling...");

      dispatch(addMessage({
        name: generateRandomname(),
        message: makeRandomMessages(20)
      }))

    },2000);

    return ()=>{
      clearInterval(interval)
    }
}, [])

  return (
    <>
    <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      <div>{
        ChatMessages.map((ele,index)=>{
          return <ChatMessage key={index} name={ele.name} message={ele.message}/>
        })
      }
      </div>
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>
      {
        e.preventDefault()
        dispatch(addMessage({
          name:"shivbhushan",
          message:LiveMessage
        }))
        setLiveMessage("")
      }}>
    <input className='pl-2 w-52' type="text" value={LiveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
    <button className='px-2 mx-2 bg-green-100 active:bg-red-600 active:text-white'>submit</button>
  </form>
  </>
  )
}

export default LiveChat