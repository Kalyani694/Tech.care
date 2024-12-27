import React from "react";
import "./feed.css"
import { diagnosis_history } from "../../dummyData";
import Graph from "../../components/graph/Graph";
import List from "../../components/list/List";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Feed = () => {
  return (
    <div className="feed">
      <div className="homePageContainer">
        <div className="heading">
          <h2>Diagnosis History</h2>
        </div>
        <div
          style={{
            width: "650px",
            height: "298px",
            backgroundColor: "#f7f4fd",
            borderRadius:
              "12px",
            padding: "10px",
          }}
        >
          <Graph diagnosis_history={diagnosis_history} />
        </div>
        <div className="cardContainer">
          <div className="card1">
            <div></div>
            <img src="/respiratory rate.png" alt="" />
            <span>Respiratory Rate</span>
            <span className="rate">20 bpm</span>
            <span>Noramal</span>

          </div>
          <div className="card2">
            <img src="/temperature.png" alt="" />
            <span>Temprature</span>
            <span className="rate">98.6°F</span>
            <span>Noramal</span>

          </div>
          <div className="card3">
            <img src="/HeartBPM.png" alt="" />
            <span>Heart Rate</span>
            <span className="rate">78 bpm</span>
            <div className="icon">
            <ArrowDropDownIcon/>
            <span>Lower than Average</span>
            </div>

          </div>
        </div>
      </div>
      <div className="listContainer">
        <List />
      </div>
    </div>
  );
};

export default Feed;
