import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: theme.spacing(4),
    left: theme.spacing(4),
    zIndex: 100,
    background: '#FAFAFA',
  },
});

/* eslint-disable react/prefer-stateless-function */
class MapSelect extends Component {
  render() {
    const towns = this.props.townArray;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl>
          <InputLabel htmlFor="town-selector">Town/Neighborhood</InputLabel>
          <Select
            value={this.props.selectedTown}
            onChange={this.props.handleChange}
            input={<Input name="townSelector" id="town-selector" />}
          >
            {towns.map(town => (
              <MenuItem key={town.latitude + town.longitude} value={town.place}>
                {town.place}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Choose a region for instant zoom</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

MapSelect.propTypes = {
  townArray: PropTypes.array.isRequired,
  classes: PropTypes.object,
  selectedTown: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(MapSelect);
