/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Map from '../../components/Map';
import NavBar from '../../components/NavBar';

export default function HomePage() {
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <NavBar />
      <h1 className="headline">
        <FormattedMessage {...messages.header} />
      </h1>
      <Map />
    </Grid>
  );
}
