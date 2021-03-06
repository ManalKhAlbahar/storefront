import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

export default function Footer() {
  return (
    <>
     
      <ButtonAppBar />
    </>
  );
}

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
function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='footer'>
      <AppBar id='nav-bar' position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'></IconButton>
          <h2>&Copy; Manal Kh Albahar</h2>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}