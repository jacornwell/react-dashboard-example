import * as React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { appNavigationListItems } from "../data/appNavPanelData";

const useStyles = makeStyles(theme => ({
  appNavigationMenu: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    fontSize: "1.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
  },
}));

const AppHeader = () => {
  const styles = useStyles();
  const [navListItems, setNavListItems] = useState([]);

  const [appMenuAnchorEl, setAppMenuAnchorEl] = useState(null);
  const appMenuOpen = Boolean(appMenuAnchorEl);

  const [userActionsMenuAnchorEl, setUserActionsMenuAnchorEl] = useState(null);
  const userActionsMenuOpen = Boolean(userActionsMenuAnchorEl);

  const handleAppMenu = event => {
    setAppMenuAnchorEl(event.currentTarget);
  };

  const handleAppMenuClose = () => {
    setAppMenuAnchorEl(null);
  };

  const handleUserActionsMenu = event => {
    setUserActionsMenuAnchorEl(event.currentTarget);
  };

  const handleUserActionsMenuClose = () => {
    setUserActionsMenuAnchorEl(null);
  };

  useEffect(() => {
    setNavListItems(appNavigationListItems);
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={styles.appNavigationMenu}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Application menu"
            aria-controls="menu-app-navigation"
            aria-haspopup="true"
            onClick={handleAppMenu}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={appMenuOpen} onClose={handleAppMenuClose}>
            <List>
              {navListItems.map(listItem => {
                return (
                  <ListItem
                    button
                    key={listItem.id}
                    onClick={handleAppMenuClose}
                    selected={listItem.selected}
                  >
                    <ListItemText primary={listItem.label} />
                  </ListItem>
                );
              })}
            </List>
          </Drawer>
        </div>

        <Typography variant="h1" className={styles.title}>
          React & Material-UI Dashboard Sample
        </Typography>

        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-user-actions"
            aria-haspopup="true"
            onClick={handleUserActionsMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-user-actions"
            anchorEl={userActionsMenuAnchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={userActionsMenuOpen}
            onClose={handleUserActionsMenuClose}
          >
            <MenuItem onClick={handleUserActionsMenuClose}>My Account</MenuItem>
            <MenuItem onClick={handleUserActionsMenuClose}>Settings</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default AppHeader;
