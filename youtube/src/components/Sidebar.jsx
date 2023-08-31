import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
 const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);

//  EARLY RETURN:-

//  if(!isMenuOpen){
//    return null;
//  }
           //OR
           
  return !isMenuOpen?null:(
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
      </ul>
      <h1 className='font-bold pt-5'>subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Learning</li>
        <li>Fashion & beauty</li>
      </ul>
    </div>
  )
}

export default Sidebar
