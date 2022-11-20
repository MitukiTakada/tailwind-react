import React from 'react'
import mainImage from "../images/main-image.jpeg"
import "./Home.css";
import userImage from "../images/user.jpg"

const Home = () => {
  return (
    <div className="home ">
      <div className="items-center ">
        <h1 className=" font-semibold text-3xl 100v text-center text-slate-200 lg:text-7xl md:text-5xl">Welcome to my portfolio!</h1>
      </div>
      <div className="flex mx-auto">
        <img src={userImage} alt="" className="h-12 w-12 rounded-full"/>
        <p>はじめまして！名城大学外国語学部に通う大学3年生のmisuki</p>
      </div>
    </div>
  )
}

export default Home