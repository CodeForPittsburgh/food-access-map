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
    top: theme.spacing(16),
    left: theme.spacing(4),
    zIndex: 100,
    background: '#FAFAFA',
  },
});

/* eslint-disable react/prefer-stateless-function */
class DetailSelect extends Component {
  render() {
    const details = this.props.detailArray;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl>
          <InputLabel htmlFor="detail-selector">Details</InputLabel>
          <Select
            value={this.props.selectedDetail}
            onChange={this.props.handleChange}
            input={<Input name="detailSelector" id="detail-selector" />}
          >
            {details.map(detail => (
              <MenuItem key={detail} value={detail}>
                {detail.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Filter by important details</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

DetailSelect.propTypes = {
  detailArray: PropTypes.array.isRequired,
  classes: PropTypes.object,
  selectedDetail: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(DetailSelect);
