import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function MainMenu({ anchorEl, handleClose }) {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem>
        <Link to="/locations">Location Table</Link>
      </MenuItem>

      <MenuItem>
        <Link to="/">Food Map</Link>
      </MenuItem>
    </Menu>
  );
}

MainMenu.propTypes = {
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func,
};

export default MainMenu;
