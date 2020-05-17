import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PhonelinkLockIcon from '@material-ui/icons/PhonelinkLock';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExploreIcon from '@material-ui/icons/Explore';
import { blue } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Logo } from "../images/logo.svg";
import ProfileImage from "../images/profile.jpg";


const drawerWidth = 260;

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'linear-gradient(45deg, #CE2866 30%, #240F3E 90%)',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: '0%',
    marginTop: '0px',
  },
  ProfileName: {
    backgroundColor: blue,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className="logo">
            <SvgIcon >
              <Logo />
            </SvgIcon>
            <h3 className="logo-text">Spacify</h3>
          </div>
          <div className = "Search-Input">
            <SearchIcon className="Search-Icon"/>
            <InputBase className = "Search"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className="Notification-Icons">
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 11 new notifications" color="inherit">
                <InfoRoundedIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.root}>
          <div className="Profile col-xl-6">
            <img alt="Remy Sharp" src={ProfileImage} id="profile-image" className={classes.large} />
          </div>
          <div className="ProfileName col-xl-6">
            <h2>Dylan da Silva</h2>
            <h4>Web Developer</h4>
          </div>
        </div>
        <br></br>
        <Divider />
        <div className={classes.drawerContainer}>
          <List>
            {['Dashboard', 'Users', 'Authentication', 'SpaceX'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index === 0 ? 
                <DashboardIcon /> 
                :index === 1 ? <PeopleIcon /> 
                :index === 2 ? <PhonelinkLockIcon />
                :<ExploreIcon />}</ListItemIcon>
                
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Account', 'FAQ', 'Settings'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index === 0 ? 
                <AccountCircleIcon /> 
                :index === 1 ? <HelpIcon /> 
                :<SettingsIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}