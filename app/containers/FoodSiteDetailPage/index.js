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
import FoodSiteDetail from '../../components/FoodSiteDetail';

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
      <FoodSiteDetail siteId={props.match.params.uniqId} />
    </Grid>
  );
}

FoodSiteDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
};
