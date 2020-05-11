import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

let handleClick=(event)=>{
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
const drip={
    color:'white',
    textTransform:'uppercase'
}
let Navlist =(props)=> {
  return (
    <Breadcrumbs aria-label="breadcrumb" style={drip}>
        <Typography color="textPrimary">{props.name}</Typography>
      <Link color="inherit" href="/" onClick={handleClick}>
        {props.station}
      </Link>
      <Link color="inherit" href={props.tabs.link1} onClick={handleClick}>
        {props.tabs.tab1}
      </Link>      
    </Breadcrumbs>
  );
}

export default Navlist