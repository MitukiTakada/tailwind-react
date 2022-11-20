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
      <div className="px-">
        <div className="flex space-x-10 justify-center items-center">
          <img src={userImage} alt="" className="h-16 w-16 rounded-full"/>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Mitsuki TKD</h2>
        </div>
        <div className="space-y-5 text-md md:text-xl lg:text-2xl">
          <div className="mt-8">
            <p className="text-slate-200">
              はじめまして！名城大学外国語学部に所属しています、mitsukiです。英語力を強みにするべく、1年の秋頃からの1年間の努力の末にTOEIC905点を獲得することができました。
            </p>
            <p className="text-slate-200">
              これからますます需要が高まっていくIT人材になるべく2年生の秋頃から独学でプログラミングの勉強をしております。
            </p>
            <p className="text-slate-200">
              現在はReactやNextなどのフロントエンドの領域を中心に学んでおります。よろしくお願いします！！
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home