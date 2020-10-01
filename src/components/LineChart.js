/*
This was an exercise to try and closely duplicate a chart built by someone else using a charting library I had not previously used.

Target Chart: https://draynow.com/wp-content/uploads/2020/09/ATL-Rail-2020-1280x720-c-default.png 
Charting Library: Victory - https://formidable.com/open-source/victory/ 

- The data lines in the original chart have drop shadows. I didn't implement that in this example.
- I abbreviated the X-axis tick labels since I had a lot of overlap using the full month names.
- The icons in the original chart's legend are drawn as a horizontal line with a circle at the center. I'm simply displaying a circle for each data line and filling them with the corresponding colors.
- The data points reflected in my graph are estimates of the data points displayed in the original chart.
*/

import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryLine,
  VictoryScatter,
} from "victory";

const useStyles = makeStyles(() => ({
  chartContainer: {
    backgroundColor: "rgb(89,89,89)",
    background:
      "radial-gradient(circle, rgba(89,89,89,1) 0%, rgba(51,51,51,1) 100%)",
  },
}));

const lineOneData = [
  { x: "Jan", y: 60 },
  { x: "Feb", y: 52 },
  { x: "Mar", y: 78 },
  { x: "Apr", y: 84 },
  { x: "May", y: 28 },
  { x: "Jun", y: 75 },
  { x: "Jul", y: 80 },
  { x: "Aug", y: 78 },
];

const lineTwoData = [
  { x: "Jan", y: 58 },
  { x: "Feb", y: 78 },
  { x: "Mar", y: 62 },
  { x: "Apr", y: 33 },
  { x: "May", y: 26 },
  { x: "Jun", y: 28 },
  { x: "Jul", y: 31 },
  { x: "Aug", y: 18 },
];

const LineChart = () => {
  const classes = useStyles();
  return (
    <div className={classes.chartContainer}>
      <VictoryChart
        domain={{ y: [0, 90] }}
        domainPadding={{ x: 20 }}
        height={250}
      >
        {/* Y Axis - I had to set crossAxis to false in order for 0 to be displayed */}
        <VictoryAxis
          dependentAxis
          crossAxis={false}
          tickCount={10}
          style={{
            axis: { stroke: "none" },
            grid: { stroke: "#545454", strokeWidth: 2 },
            tickLabels: { padding: 10, fill: "#D9D9D9" },
          }}
        />

        {/* X Axis */}
        <VictoryAxis
          style={{
            axis: { stroke: "#545454", strokeWidth: 2 },
            tickLabels: { padding: 8, fill: "#D9D9D9" },
          }}
        />

        {/* X Axis */}
        <VictoryLabel
          text="Time to Wait (minutes)"
          textAnchor="middle"
          x={220}
          y={20}
          style={{
            fill: "#D9D9D9",
            fontSize: 18,
          }}
        />

        <VictoryLegend
          x={146}
          y={225}
          orientation="horizontal"
          gutter={30}
          style={{
            labels: { fill: "#D9D9D9", fontSize: 13 },
          }}
          data={[
            { name: "Line 1", symbol: { fill: "#5D983E" } },
            { name: "Line 2", symbol: { fill: "#9CC38C" } },
          ]}
        />

        <VictoryLine
          data={lineOneData}
          style={{
            data: { stroke: "#5D983E", strokeWidth: 3 },
          }}
        />

        <VictoryScatter
          data={lineOneData}
          size={5}
          style={{ data: { fill: "#5D983E" } }}
        />

        <VictoryLine
          data={lineTwoData}
          style={{
            data: { stroke: "#9CC38C", strokeWidth: 3 },
          }}
        />

        <VictoryScatter
          data={lineTwoData}
          size={5}
          style={{ data: { fill: "#9CC38C" } }}
        />
      </VictoryChart>
    </div>
  );
};
export default LineChart;
