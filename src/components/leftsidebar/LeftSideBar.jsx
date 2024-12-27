import React from 'react';
import './LeftSideBar.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const LeftSideBar = ({ patients }) => {
  return (
    <div className="LeftSideBar">
      <div className="header">
        <h2>Patients</h2>
        <SearchOutlinedIcon />
      </div>
      <div className="patientsList">
        {patients?.map((patient) => (
          <div key={patient.id} className="patientItem">
            <img src={patient.images} alt={patient.name} />
            <div className="textInfo">
              <span>{patient.name}</span>
              <span>
                {patient.gander}, {patient.age}
              </span>
            </div>
            <MoreHorizIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
