import React from "react";
import "./list.css";
import { diagnostic_list } from "../../dummyData";

const List = () => {
  return (
    <div className="list-container">
      <h2 className="list-title">Diagnostic List</h2>
      <div className="list-table">
        <div className="table-header">
          <div className="table-header-cell">Problem/Diagnosis</div>
          <div className="table-header-cell">Description</div>
          <div className="table-header-cell">Status</div>
        </div>
        <div className="table-body">
          {diagnostic_list.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-cell">{item.name}</div>
              <div className="table-cell">{item.description}</div>
              <div className="table-cell">{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
