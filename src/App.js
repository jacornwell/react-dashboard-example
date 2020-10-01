import * as React from "react";
import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppHeader from "./components/AppHeader";
import AppDrawer from "./components/AppDrawer";
import AppContent from "./components/AppContent";

import "./styles.css";

const useStyles = makeStyles(theme => ({
  appHeader: {
    flex: "0 0 auto",
  },
  contentContainer: {
    position: "relative",
    flex: "1 1 auto",
    width: "100%",
  },
  appDrawer: {
    display: "none",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "10rem",
    overflowY: "auto",
    borderRight: "1px solid #a7a7a7",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  appContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "auto",
    [theme.breakpoints.up("sm")]: {
      left: "10rem",
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppHeader className={classes.appHeader} />
      <div className={classes.contentContainer}>
        <div className={classes.appDrawer}>
          <AppDrawer />
        </div>
        <div className={classes.appContent}>
          <AppContent />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
