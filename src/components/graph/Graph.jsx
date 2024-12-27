import React from "react";
import "./graph.css";
import { Line } from "react-chartjs-2";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./graph.css"; // Import the CSS file

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Graph = ({ diagnosis_history }) => {
  // Prepare labels and datasets from the data
  const labels = diagnosis_history?.map((item) => `${item.month} ${item.year}`);
  const systolicData = diagnosis_history?.map((item) => item.blood_pressure.systolic.value);
  const diastolicData = diagnosis_history?.map((item) => item.blood_pressure.diastolic.value);

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic Pressure",
        data: systolicData,
        borderColor: "#f783ac", // Pink color
        backgroundColor: "rgba(247, 131, 172, 0.2)",
        tension: 0.4, // Smooth curve
      },
      {
        label: "Diastolic Pressure",
        data: diastolicData,
        borderColor: "#a29bfe", // Purple color
        backgroundColor: "rgba(162, 155, 254, 0.2)",
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#666",
        },
      },
      y: {
        grid: {
          color: "#e0e0e0",
        },
        ticks: {
          color: "#666",
        },
      },
    },
  };

  return (
    <div className="graph-container">
      <div className="graph-header">
        <div className="graphHeading">
          <h2>Blood Pressure</h2>
          <select>
            <option>Last 6 months</option>
            <option>Last 12 months</option>
          </select>
        </div>
        <div className="chart-container">
          <Line data={data} options={options} style={{ width: "437px", height: "203px" }} />
        </div>
      </div>
      <div className="itemContainer">


        <div class="metrics">
          <div class="metric-item_higher">
            <div class="legend-item">
              <div class="legend-color systolic"></div>
              <span class="legend-text">Systolic</span>
            </div>
            <span class="value">160</span>
            <div class="text">
              <ArrowDropUpIcon/>
              <span>Higher than Average</span>
            </div>
          </div>

          <div class="metric-item_lower">
            <div class="legend-item">
              <div class="legend-color diastolic"></div>
              <span class="legend-text">Diastolic</span>
            </div>
            <span class="value">78</span>
            <div class="text">
              <ArrowDropDownIcon/>
              <span>Lower than Average</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Graph;
