import React from 'react'
import "./Home.css"
import LeftSideBar from '../../components/leftsidebar/LeftSideBar'
import RightSideBar from '../../components/rightsidebar/RightSideBar'
import Feed from '../../Pages/feed/Feed'
import { patients, singlePatient } from '../../dummyData.js'

const Home = () => {
  return (
    <div className='home'>
      <LeftSideBar patients={patients} />
      <Feed />
      <RightSideBar singlePatient={singlePatient[0]} />

    </div>
  )
}

export default Home