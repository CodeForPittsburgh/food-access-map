import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function ListMenu() {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <Typography color="inherit" variant="subtitle1">
            <Link to="/locations">Location Table</Link>
          </Typography>
        </ListItemText>

        <ListItemText inset>
          <Typography color="inherit" variant="subtitle1">
            <Link to="/">Food Map</Link>
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default ListMenu;
