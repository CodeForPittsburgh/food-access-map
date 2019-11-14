/*
 * FoodSiteDetailPage
 *
 * This is a details page for food sites
 *
 */

// import _ from 'lodash';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './messages';
import FoodSiteDetail from '../../components/FoodSiteDetail';
// import { useApi } from '../../serviceHooks/useApi';

export default function FoodSiteDetailPage(props) {
  // const foodSiteInfo = useApi();
  // const siteName = _.find(
  //   foodSiteInfo,
  //   site => site.id === props.match.params.uniqId,
  // );
  // console.log(siteName);

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
      <FoodSiteDetail siteId={props.match.params.uniqId} />
    </Grid>
  );
}

FoodSiteDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
};
