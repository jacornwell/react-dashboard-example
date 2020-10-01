import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import LineChart from "./LineChart";
import PieChart from "./PieChart";
import ApprovalSummary from "./ApprovalSummary";

const useStyles = makeStyles(() => ({
  contentContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "0 0 2rem 2rem",

    "& .card": {
      display: "block",
      flex: "1 1 25rem",
      minWidth: "16rem",
      marginTop: "2rem",
      marginRight: "2rem",
    },

    "& .card-lg": {
      display: "block",
      flex: "1 1 100rem",
      minWidth: "16rem",
      maxWidth: "60rem",
      marginTop: "2rem",
      marginRight: "2rem",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.contentContainer}>
      <Card className="card">
        <CardContent>
          <ApprovalSummary />
        </CardContent>
      </Card>

      <Card className="card">
        <CardContent>
          <PieChart />
        </CardContent>
      </Card>

      <Card className="card-lg">
        <CardContent>
          <LineChart />
        </CardContent>
      </Card>
    </div>
  );
};
export default Dashboard;
