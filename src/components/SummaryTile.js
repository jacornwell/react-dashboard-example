import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(props => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  countContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: props => props.countBgColor || "#ccc",
    padding: "1rem 2rem",

    "& .count": {
      display: "block",
      fontSize: "1.5rem",
      fontWeight: 600,
      color: props => props.countColor || "#000",
    },
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    padding: "0.8rem",

    "& .label": {
      fontSize: "1rem",
    },
  },
}));

const SummaryTile = props => {
  const styles = useStyles(props);

  return (
    <Paper className={styles.root} elevation={5}>
      <div className={styles.countContainer}>
        <Typography className="count" data-testid="count-elem">
          {props.count || 0}
        </Typography>
      </div>
      <div className={styles.contentContainer}>
        <Typography className="label" data-testid="label-elem">
          {props.label || ""}
        </Typography>
      </div>
    </Paper>
  );
};

export default SummaryTile;
