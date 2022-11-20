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
      <div className="px-24">
        <div className="flex space-x-10 justify-center items-center">
          <img src={userImage} alt="" className="h-16 w-16 rounded-full"/>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Mitsuki TKD</h2>
        </div>
        <div>
          <p>
            はじめまして！名城大学外国語学部に所属しています、mitsukiです。英語力を強みにするべく、一年の秋頃からの1年間の努力の末に
          </p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Home