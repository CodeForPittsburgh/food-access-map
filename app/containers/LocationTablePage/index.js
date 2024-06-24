/*
 * LocationTablePage
 *
 * This is a sortable searchable table of the available locations
 *
 */

import React, { lazy, Suspense } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
const LocationTable = lazy(() => import('../../components/LocationTable'));

export default function LocationTablePage() {
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <h1 className="headline">
        <FormattedMessage {...messages.header} />
      </h1>
      <Suspense fallback={<CircularProgress />}>
        <LocationTable />
      </Suspense>
    </Grid>
  );
}
