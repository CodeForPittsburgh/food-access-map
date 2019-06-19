import React from 'react';
import PropTypes from 'prop-types';

export default class CityInfo extends React.PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.place}, ${info.latitude}-${info.longitude}`;

    return (
      <div>
        <div>
          {displayName}
          {/* <a
            some kind of link to the individual page
          </a> */}
        </div>
      </div>
    );
  }
}

CityInfo.propTypes = {
  info: PropTypes.object.isRequired,
};
