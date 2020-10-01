import * as React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { appNavigationListItems } from "../data/appNavPanelData";

const useStyles = makeStyles(theme => ({
  liSelectionIndicator: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "0.5rem",
    backgroundColor: indigo[500],
  },
}));

const AppHeader = () => {
  const styles = useStyles();
  const [navListItems, setNavListItems] = useState([]);

  useEffect(() => {
    setNavListItems(appNavigationListItems);
  }, []);

  const liSelectionIndicator = listItem => {
    return listItem.selected
      ? <div className={styles.liSelectionIndicator} />
      : null;
  };

  return (
    <List>
      {navListItems.map(listItem => {
        return (
          <ListItem button key={listItem.id} selected={listItem.selected}>
            {liSelectionIndicator(listItem)}
            <ListItemText primary={listItem.label} />
          </ListItem>
        );
      })}
    </List>
  );
};
export default AppHeader;
