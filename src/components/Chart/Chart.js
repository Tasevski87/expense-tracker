import React from "react";
import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //tranfering data object to a number 
    const totalMaximum = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoints.map(dataPoint => 
        <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
        />)}
    </div>

};
export default Chart;