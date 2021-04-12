import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './styles';

const NavBar: React.FC = () => {
  const classes = useStyles();
  const [barText, setBarText] = useState('');
  useEffect(() => {
    const page = window.location.pathname;
    switch (page) {
      case '/cases':
        setBarText('Cases');
        break;
      case '/legislacao':
        setBarText('Legislação');
        break;
      case '/tutoriais':
        setBarText('Tutoriais');
        break;
      default:
        setBarText('');
        break;
    }
  }, []);
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {barText}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
