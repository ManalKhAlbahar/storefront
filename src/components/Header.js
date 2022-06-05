import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { useSelector } from 'react-redux';


export default function Header() {
  const state = useSelector((state) => state);
  return (
      <>
        <ButtonAppBar state={state}  />
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


  function ButtonAppBar(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar id='nav-bar' position='static'>
          <Toolbar>
            <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'></IconButton>
            <Typography variant='h4' className={classes.title}>
                STORE
            </Typography>

          </Toolbar>
        </AppBar>
      </div>
    );
  }