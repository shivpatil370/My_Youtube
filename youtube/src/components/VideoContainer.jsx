import React, { useEffect, useState } from 'react';
import {YOUTUBE_VIDEOS_API} from "../components/utils/contentApi"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';


const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  const [fdeta,setFdeta]=useState([]);
  // console.log(fdeta)
  

  // ------------------------------------------------------------------------------
  // SEARCH FUNCTIONALLATY
      const searchItems=useSelector((store)=>store.searchInp.searchText);
      // console.log(searchItems[0])


      const DetaFun=(elemet,videos)=>{
        //  console.log("element is "+videos);
        const data=videos?.filter((ele)=>{
          return ele?.snippet?.title?.toLowerCase().includes(elemet?.toLowerCase());
        })

        setFdeta("")
        setFdeta(data)
        // console.log(data)
      }

      
        
     
      
  // ------------------------------------------------------------------------------

useEffect(()=>{
   getVideos()
},[]);

useEffect(() => {
  DetaFun(searchItems[0],videos);
  MyFunc(searchItems[0])
}, [searchItems[0]])

const MyFunc=(ele)=>{
  // console.log("hmmm")
     if(ele==="null"){
      setFdeta(videos)
     }
}

const getVideos= async ()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
    const json=await data.json();
    // console.log(json.items);
    setVideos(json.items)
    setFdeta(json.items)
    
}

  return (
    <div className='flex flex-wrap'>
      {
        fdeta?.map((video)=>
   <Link to={"/watch?v="+ video.id} key={video?.id}><VideoCard info={video}/></Link>
)
      }
    </div>
  )
}

export default VideoContainer