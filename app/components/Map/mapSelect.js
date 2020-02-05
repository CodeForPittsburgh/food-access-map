import _ from 'lodash';
import React, { Component } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
          <Autocomplete
            options={towns}
            getOptionLabel={option => option.place}
            onChange={this.props.handleChange}
            style={{ width: 300 }}
            defaultValue={_.find(towns, { place: 'Pittsburgh' })}
            renderInput={params => (
              <TextField
                {...params}
                label="Zoom a Neighborhood"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <FormHelperText>Choose a region for instant zoom</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

MapSelect.propTypes = {
  townArray: PropTypes.array.isRequired,
  classes: PropTypes.object,
  selectedTown: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(MapSelect);
