/*
 * LocationTablePage
 *
 * This is a sortable searchable table of the available locations
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import LocationTable from '../../components/LocationTable';
import messages from './messages';

export default function LocationTablePage() {
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <Link to="/">I go back home! Why am I not a reusable nav?!</Link>
      <h1 className="headline">
        <FormattedMessage {...messages.header} />
      </h1>
      <LocationTable />
    </Grid>
  );
}
