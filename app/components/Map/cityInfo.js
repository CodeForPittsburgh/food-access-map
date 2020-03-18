import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

export default class CityInfo extends React.PureComponent {
  render() {
    const { features } = this.props;

    return (
      <div>
        <MenuList open={features && features.length}>
          {features.map(feature => (
            <MenuItem>
              <Link to={`/foodSite/${feature.id}`}>
                Go to detail page for {feature.name}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </div>
    );
  }
}

CityInfo.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
};
