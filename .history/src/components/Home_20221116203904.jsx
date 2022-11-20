import React from 'react'

const Home = () => {
  return (
    <div className="h-full my-20 flex ">
      <div>
        <h1 className="font-bold text-5xl "
        >Welcome<br/> to my <br/>portfolio!
        </h1>
        <button className="conact-btn">お問い合わせ</button>
      </div>
      <img src="src/image/main-img.jpeg" alt=""  className="h-20 w-5/6"/>
    </div>
  )
}

export default Home