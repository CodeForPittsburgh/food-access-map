/**
 *
 * Location Table
 *
 */

import React, { memo } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MaterialTable from 'material-table';
import axios from 'axios';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class LocationTable extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
    };

    this.loadLocationsFromServer = this.loadLocationsFromServer.bind(this);
  }

  loadLocationsFromServer() {
    axios
      .get('http://localhost:8000/api/location/')
      .then(res => {
        this.setState({ locations: res.data });
        // console.log(res.data);  use this to check out other info we can add to tables
      })
      .catch(err => {
        console.error(err);
      });

    // uncomment this and comment out axios if not using the Django server
    // const fakeLocations = [
    //   {
    //     name: 'dingle',
    //     open_time: '8am',
    //     close_time: '6pm',
    //   },
    //   {
    //     name: 'dangle',
    //     open_time: '7am',
    //     close_time: '5pm',
    //   },
    //   {
    //     name: 'dongle',
    //     open_time: '6am',
    //     close_time: '4pm',
    //   },
    // ];

    // this.setState({ locations: fakeLocations });
  }

  componentDidMount() {
    this.loadLocationsFromServer();
  }

  render() {
    return (
      <div>
        <h1>Option 1</h1>
        {/* <p>
          This is one using some more basic material UI components if we want a
          lot of control of everything. Until we know what data we get and what
          we want to be able to do with it, it is hard to say. Could easily add
          custom text input sorting, dropdown sorting for times, etc.
        </p> */}
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Open</TableCell>
                <TableCell align="right">Close</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.locations.map(loc => (
                <TableRow key={loc.name}>
                  <TableCell component="th" scope="row">
                    {loc.name}
                  </TableCell>
                  <TableCell align="right">{loc.open_time}</TableCell>
                  <TableCell align="right">{loc.close_time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <h1>Option 2</h1>
        {/* <p>
          This prebuilt tool looks pretty good. we get filtering out of the box,
          looks easy to change stying, easy to add action buttons for things
          like add/edit, select boxes, individual column filters, custom
          sorting. Only would need above option if we need something REALLY
          custom. Only downside is their dependencies seem brittle (was hard to
          install correctly) and may be tough to keep updated
        </p> */}
        <MaterialTable
          title="Food Banks"
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Opening Time', field: 'open_time' },
            { title: 'Closing Time', field: 'close_time' },
          ]}
          data={this.state.locations}
        />
      </div>
    );
  }
}

// LocationTable.propTypes = {};

export default memo(LocationTable);
