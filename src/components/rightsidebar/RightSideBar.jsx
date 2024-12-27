import React from 'react'
import "./rightsidebar.css"
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
const RightSideBar = ({ singlePatient }) => {
    return (
        <div className='rightSideBar'>
            <div className="patientsInfo">
                <div className="patientsImage">
                    <img src={singlePatient.profile_picture} alt="" />
                    <span>{singlePatient.name}</span>
                </div>
                <div className="pationatDeatis">
                    <div className="itemsInfo">
                        <CalendarTodayOutlinedIcon />
                        <div className="textContainer">

                            <span>Date Of Birth</span>
                            <span>{singlePatient.date_of_birth}</span>
                        </div>
                    </div>
                    <div className="itemsInfo">
                        <FemaleOutlinedIcon />
                        <div className="textContainer">

                            <span>Gender</span>
                            <span>{singlePatient.gender}</span>
                        </div>
                    </div>
                    <div className="itemsInfo">
                        <CallOutlinedIcon />
                        <div className="textContainer">
                            <span>Contact Info.</span>
                            <span>{singlePatient.phone_number}</span>
                        </div>
                    </div>
                    <div className="itemsInfo">
                        <CallOutlinedIcon />
                        <div className="textContainer">
                            <span>Emergency contact</span>
                            <span>{singlePatient.emergency_contact}</span>
                        </div>
                    </div>
                    <div className="itemsInfo">
                        <GppGoodOutlinedIcon />
                        <div className="textContainer">
                            <span>Insurance Provider</span>
                            <span>{singlePatient.insurance_type}</span>
                        </div>
                    </div>
                </div>
                <button>Show All Information</button>
            </div>
            <div className="labResults">
                <h1>Lab Reults</h1>
                <div className="labResultsContainer">
                    <span>Blood Tests</span>
                    <FileDownloadOutlinedIcon />

                </div>
                <div className="labResultsContainer">
                    <span>CT Scans</span>
                    <FileDownloadOutlinedIcon />

                </div>
            </div>
        </div>
    )
}

export default RightSideBar