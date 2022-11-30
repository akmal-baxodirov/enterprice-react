import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { colors, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavigationBar() {
  const classes = {
    link: {
      color: colors.lightBlue[50],
      textDecoration: 'none',
    },
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to={'/'} style={classes.link}>
            LOGO
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Button color="inherit">
              <Link to={'/'} style={classes.link}>
                Home
              </Link>
            </Button>
            <Button color="inherit" style={classes.link}>
              About
            </Button>
            <Button color="inherit" style={classes.link}>
              Dashboard
            </Button>
            <Button color="inherit" style={classes.link}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
