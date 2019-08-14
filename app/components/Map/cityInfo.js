import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CityInfo extends React.PureComponent {
  render() {
    const { info } = this.props;

    return (
      <div>
        <Link to={`/foodSite/${info.id}`}>
          Go to detail page for {info.name}
        </Link>
      </div>
    );
  }
}

CityInfo.propTypes = {
  info: PropTypes.object.isRequired,
};
