/*
 * NavBar
 *
 * This is a navbar/header to use at the top of container pages
 *
 */

import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/MoreVert';
import MainMenu from './MainMenu';
import ListMenu from './ListMenu';

function NavBar() {
  const theme = useTheme();
  const onSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            Food Access Map
          </Typography>
          {onSmallScreen ? (
            <React.Fragment>
              <IconButton
                onClick={e => {
                  setMenuOpen(!menuOpen);
                  setAnchorEl(e.currentTarget);
                }}
              >
                <MenuIcon />
              </IconButton>
              <MainMenu
                anchorEl={anchorEl}
                handleClose={() => setAnchorEl(null)}
              />
            </React.Fragment>
          ) : (
            <ListMenu />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
