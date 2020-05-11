import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Navlinks from './navlist';


let NavigationBar = ()=> {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  let details = {
    name:'Sergent Kiptanui',
      station:'kasarani police station',
      tabs:{
        tab1: "Bookings",
        link1: './link'
      }
  }
  const classes = useStyles();
  const navstyle={
    marginRight:'50%'
  }
  const logoutstyle={
    float:'right',
    marginLeft:'50%'
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>          
          <Navlinks 
          name={details.name}
          station={details.station}
          tabs={details.tabs}
          style={navstyle}
          />          
          <Button style={logoutstyle} color="inherit">log out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar