import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { VictoryPie } from "victory";

const useStyles = makeStyles(() => ({
  chartContainer: {
    backgroundColor: "#eceff1",
  },
}));

const chartData = [
  { x: "Purple", y: 74, color: "#9c27b0" },
  { x: "Red", y: 49, color: "#f44336" },
  { x: "Indigo", y: 67, color: "#3f51b5" },
  { x: "Orange", y: 56, color: "#ff9800" },
  { x: "Green", y: 24, color: "#4caf50" },
];

const PieChart = () => {
  const classes = useStyles();
  return (
    <div className={classes.chartContainer}>
      <VictoryPie
        data={chartData}
        colorScale={chartData.map(item => item.color)}
        style={{
          labels: { fill: "#263238" },
        }}
        height={250}
      />
    </div>
  );
};

export default PieChart;
