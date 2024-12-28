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
         
            <HomeOutlinedIcon/>
            <span>Overview</span>
            
            </div>
            <div className="item">
          
            <PeopleAltOutlinedIcon/>
            <span>Patients</span>
            
            </div>
            <div className="item">
           
            <CalendarTodayOutlinedIcon/>
            <span>Shadule</span>
           
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon/>
            <span>Message</span>
          
            </div>
            <div className="item">
           
            <CreditCardOutlinedIcon/>
            <span>Transactions</span>
            
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