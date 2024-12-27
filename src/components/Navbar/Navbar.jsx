import React from 'react'
import "./Navbar.css"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="/TestLogo.png" alt="" className="logoImage" />
        </div>
        <div className="center">
            <div className="item">
            <a href="#">
            <HomeOutlinedIcon/>
            <span>Overview</span>
            </a>
            </div>
            <div className="item">
            <a href="#">
            <PeopleAltOutlinedIcon/>
            <span>Patients</span>
            </a>
            </div>
            <div className="item">
            <a href="#">
            <CalendarTodayOutlinedIcon/>
            <span>Shadule</span>
            </a>
            </div>
            <div className="item">
            <a href="#">
            <ChatBubbleOutlineOutlinedIcon/>
            <span>Message</span>
            </a>
            </div>
            <div className="item">
            <a href="#">
            <CreditCardOutlinedIcon/>
            <span>Transactions</span>
            </a>
            </div>
        </div>
        <div className="right">
            <div className="info">
                <img src="/senior.png" alt="" />
                <div className="textContainer">
                    <span>Dr.Jose Simmons</span>
                    <span>Gernal Practitioner</span>
                </div>
                <div className="symboll">
                    <SettingsOutlinedIcon/>
                    <MoreVertIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar