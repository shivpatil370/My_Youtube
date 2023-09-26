import React from 'react'

const commentdata=[
    {
        name:"shiv",
        text:"nice video!",
        reply:[]
    },
    {
        name:"shiv1",
        text:"i am commenting1!",
        reply:[]
    },
    {
        name:"shiv2",
        text:"i am commenting2!",
        reply:[1,2]
    }
]

const Comment=({data})=>{
    const {name,text,reply}=data;

    return(
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2' key={data.name}>
            <img className='w-12 h-12' alt='user' src='https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg'/>
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentList=({comments})=>{
    return(
        <>
            {
                commentdata.map((ele,index)=>{
                    return (
                        <div>
                            <Comment key={index} data={ele}/>
                            <div className='pl-5 border border-l-black ml-5'>
                            {/* <CommentList comments={ele.reply}/> */}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentList comments={commentdata}/>
    </div>
  )
}

export default CommentContainer