import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
     <img className="h-8 rounded-full" src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="user"/>
     <span className='font-bold px-2'>{name}</span>
     <span>{message}</span>
    </div>
  )
}

export default ChatMessage