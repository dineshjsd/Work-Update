import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  return (
    <div className="chart">
      {props.dataPoints((dataPoints) => {
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={null}
          label={dataPoints.label}
        />;
      })}
    </div>
  );
}

export default Chart;
