/**
 *
 * FoodSiteDetail
 *
 */

import React, { memo } from 'react';
// import _ from 'lodash';
// import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

// import axios from 'axios';

/* eslint-disable react/prefer-stateless-function */
class FoodSiteDetail extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      siteDetails: {},
    };
  }

  //   uncomment other component mount and delete this once we have fewer null results
  componentDidMount() {
    const res = {
      name: 'funkytown',
      open_from: 'March',
      open_to: 'October',
      open_time1: 6,
      close_time1: 9,
      sunday: true,
      monday: true,
      tuesday: true,
      wednesday: true,
      friday: true,
      saturday: false,
      snap: true,
      wic: true,
      fmnp: true,
      fresh_produce: false,
      mrfei_score: 152,
      food_bucks: false,
      open_to_spec_group: false,
      address: 'yer moms house',
      city: 'pgh',
      state: 'pa',
      zip_code: 12345,
      location_description: 'sassy',
    };
    this.setState({ siteDetails: res });
  }
  //   componentDidMount() {
  //     axios
  //       .get(`https://dev.stevesaylor.io/api/location/${this.props.siteId}/`)
  //       .then(res => this.setState({ siteDetails: res.data }));
  //   }

  render() {
    return (
      <div>
        <h1 className="headline">
          {this.state.siteDetails.name || 'Site Not Found'}
        </h1>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={4}>
            <i>Regional MRFEI score: </i>
            <i>{this.state.siteDetails.mrfei_score || '--'}</i>
            <p>
              Street: {this.state.siteDetails.address || '--'}
              <br />
              City: {this.state.siteDetails.city || '--'}
              <br />
              State: {this.state.siteDetails.state || '--'}
              <br />
              Zip: {this.state.siteDetails.zip_code || '--'}
            </p>
            <i>
              {`This site has been declared: ${
                this.state.siteDetails.location_description
              }`}
            </i>
          </Grid>
          <Grid item xs={4}>
            <h2>The Sweet Deets</h2>
            <FormGroup column>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!this.state.siteDetails.snap}
                    color="primary"
                    disabled
                  />
                }
                label="Takes SNAP"
                labelPlacement="top"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!this.state.siteDetails.wic}
                    color="primary"
                    disabled
                  />
                }
                label="Takes WIC"
                labelPlacement="top"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!this.state.siteDetails.fmnp}
                    color="primary"
                    disabled
                  />
                }
                label="Takes FMNP"
                labelPlacement="top"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!this.state.siteDetails.food_bucks}
                    color="primary"
                    disabled
                  />
                }
                label="Takes Food Bucks"
                labelPlacement="top"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!this.state.siteDetails.fresh_produce}
                    color="primary"
                    disabled
                  />
                }
                label="Has Fresh Produce"
                labelPlacement="top"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!this.state.siteDetails.open_to_spec_group}
                    color="primary"
                    disabled
                  />
                }
                label="Open to Special Groups"
                labelPlacement="top"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <br />
            <h3>Site is running:</h3>
            <div>
              {this.state.siteDetails.open_from &&
              this.state.siteDetails.open_to ? (
                <i>
                  from {this.state.siteDetails.open_from} until{' '}
                  {this.state.siteDetails.open_to}
                </i>
              ) : (
                <i>all year round</i>
              )}
            </div>
            <h3>Site is open:</h3>
            <div>
              {this.state.siteDetails.open_time2 &&
              this.state.siteDetails.close_time2 ? (
                <i>
                  from {this.state.siteDetails.open_time1 || '--'} until{' '}
                  {this.state.siteDetails.close_time1 || '--'} and{' '}
                  {this.state.siteDetails.open_time2} until{' '}
                  {this.state.siteDetails.close_time2}
                </i>
              ) : (
                <i>
                  from {this.state.siteDetails.open_time1} until{' '}
                  {this.state.siteDetails.close_time1}
                </i>
              )}
            </div>
          </Grid>
        </Grid>
        <h2>Days of Operation</h2>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.sunday}
                color="primary"
                disabled
              />
            }
            label="Sunday"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.monday}
                color="primary"
                disabled
              />
            }
            label="Monday"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.tuesday}
                color="primary"
                disabled
              />
            }
            label="Tuesday"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.wednesday}
                color="primary"
                disabled
              />
            }
            label="Wednesday"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.thursday}
                color="primary"
                disabled
              />
            }
            label="Thursday"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.friday}
                color="primary"
                disabled
              />
            }
            label="Friday"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.saturday}
                color="primary"
                disabled
              />
            }
            label="Saturday"
            labelPlacement="top"
          />
        </FormGroup>
      </div>
    );
  }
}

export default memo(FoodSiteDetail);

// FoodSiteDetail.propTypes = {
//   siteId: PropTypes.string.isRequired,
// };
