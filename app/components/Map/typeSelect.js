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
    top: theme.spacing(28),
    left: theme.spacing(4),
    zIndex: 100,
    background: '#FAFAFA',
  },
});

/* eslint-disable react/prefer-stateless-function */
class TypeSelect extends Component {
  render() {
    const types = this.props.typeArray;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl>
          <InputLabel htmlFor="type-selector">Site Types</InputLabel>
          <Select
            value={this.props.selectedTypes}
            onChange={this.props.handleChange}
            multiple
            input={<Input name="typeSelector" id="type-selector" />}
          >
            {types.map(type => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Filter by site type</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

TypeSelect.propTypes = {
  typeArray: PropTypes.array.isRequired,
  classes: PropTypes.object,
  selectedTypes: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(TypeSelect);
