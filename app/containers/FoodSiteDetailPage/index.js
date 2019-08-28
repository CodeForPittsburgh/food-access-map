/*
 * FoodSiteDetailPage
 *
 * This is a details page for food sites
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './messages';
import NavBar from '../../components/NavBar';

export default function FoodSiteDetailPage(props) {
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
      <p>
        oh hey I am the detail page for now. Fill me with styled display
        components
      </p>
      <p>This is my uniq id! behold its glory!!! {props.match.params.uniqId}</p>
    </Grid>
  );
}

FoodSiteDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
};
