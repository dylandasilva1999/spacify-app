import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProfileImage from "../../images/profile.jpg";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExploreIcon from '@material-ui/icons/Explore'
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Logo } from "../../images/logo.svg";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PhonelinkLockIcon from '@material-ui/icons/PhonelinkLock';
import HelpIcon from '@material-ui/icons/Help';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PeopleIcon from '@material-ui/icons/People';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
//import Grid from '@material-ui/core/Grid';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    selected: false,
  },
  drawer: {
    [theme.breakpoints.up('xl')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  ListItemIcon: {
    padding: '15px',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'linear-gradient(45deg, #CE2866 30%, #240F3E 90%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    position: "absolute"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));

function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
const drawer = (
    <div>
      <div className={classes.root}>
          <div className="Profile">
            <img alt="Profile Image" src={ProfileImage} id="profile-image" />
          </div>
          <div className="ProfileName">
            <h2>Dylan da Silva</h2>
            <h4>Web Developer</h4>
          </div>
        </div>
        <br></br>
        <Divider />
        <Router>
          <Switch>
            <MenuList>
              <MenuItem component={Link} to="/">
              <ListItemIcon>{<DashboardIcon />}</ListItemIcon>
                Dashboard
              </MenuItem>
              <MenuItem component={Link} to="/users">
              <ListItemIcon>{<PeopleIcon />}</ListItemIcon>
                Users 
              </MenuItem>
              <MenuItem component={Link} to="/authentication">
              <ListItemIcon>{<PhonelinkLockIcon />}</ListItemIcon>
                Authentication
              </MenuItem>
              <a href="https://www.spacex.com/"><MenuItem>
              <ListItemIcon>{<ExploreIcon />}</ListItemIcon>
                SpaceX
              </MenuItem></a>
              <Divider />
              <MenuItem component={Link} to="/account">
              <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
                Account
              </MenuItem>
              <MenuItem component={Link} to="/faq">
              <ListItemIcon>{<HelpIcon />}</ListItemIcon>
                FAQ
              </MenuItem>
              <MenuItem component={Link} to="/settings">
              <ListItemIcon>{<SettingsIcon />}</ListItemIcon>
                Settings
              </MenuItem>
            </MenuList>
          </Switch>
        </Router>
    </div>
  );
return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className="logo">
            <SvgIcon >
              <Logo />
            </SvgIcon>
            <h3 className="logo-text">Spacify</h3>
          </div>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon/>
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden lgDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>  
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;