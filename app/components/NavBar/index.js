/*
 * NavBar
 *
 * This is a navbar/header to use at the top of container pages
 *
 */

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="subtitle1" color="inherit">
            This Header is the Name of Our Page OMG!!!
          </TypoGraphy>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="subtitle1">
                  <Link to="/locations">Location Table</Link>
                </TypoGraphy>
              </ListItemText>

              <ListItemText inset>
                <TypoGraphy color="inherit" variant="subtitle1">
                  <Link to="/">Food Map</Link>
                </TypoGraphy>
              </ListItemText>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
