import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CityInfo extends React.PureComponent {
  render() {
    const { info } = this.props;
    const slug = `${info.latitude}.${info.longitude}`;

    return (
      <div>
        <Link to={`/foodSite/${slug}`}>Go to detail page for {info.place}</Link>
      </div>
    );
  }
}

CityInfo.propTypes = {
  info: PropTypes.object.isRequired,
};
