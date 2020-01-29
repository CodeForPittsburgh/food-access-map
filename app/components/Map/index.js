/**
 *
 * Map
 *
 */

import React, { memo } from 'react';
import _ from 'lodash';

import ReactMapGL, { Source, Layer, Popup } from 'react-map-gl';
import axios from 'axios';
import MapSelect from './mapSelect';
import { townArray } from './townConstants';
import CityInfo from './cityInfo';
import Wrapper from './Wrapper';

const clickRadius = navigator.userAgent.includes('Mobi') ? 10 : 0;

/* eslint-disable react/prefer-stateless-function */
class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: '100%',
        height: '100%',
        latitude: 40.4406,
        longitude: -79.9659,
        zoom: 12,
      },
      selectedTown: 'Pittsburgh',
      popupInfo: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://dev.stevesaylor.io/api/location/')
      .then(res => this.setState({ geoJSON: this.convertToGeoJSON(res) }));
  }

  handleSelection(event) {
    const oldView = _.clone(this.state.viewport);
    const place = event.target.value;
    const { latitude, longitude } = _.find(townArray, { place });
    const newView = _.assign({}, oldView, {
      latitude,
      longitude,
    });

    this.setState({
      viewport: newView,
      selectedTown: place,
    });
  }

  convertToGeoJSON({ data }) {
    // Converts api data to geoJSON points
    // Might be better if this arrived from the server in this format
    return {
      type: 'FeatureCollection',
      features: data.reduce((result, site) => {
        const { latitude, longitude } = site;
        if (longitude) {
          result.push({
            type: 'Feature',
            geometry: {
              type: 'Point',
              // GeoJSON takes lat/lon in reverse order
              // Even more confusing: at least half of the lat/lon values provided are reversed??
              // Not sure how this wasn't a problem with previous config
              coordinates:
                longitude < latitude
                  ? [longitude, latitude]
                  : [latitude, longitude],
            },
            properties: site,
          });
        }
        return result;
      }, []),
    };
  }

  handleClick(event) {
    // Filter out features that we didn't provide
    const features = event.features
      ? event.features.filter(feature => feature.layer.id === 'data')
      : [];
    if (!features.length) return;
    // If there are still several features, pick one at random
    // Future: might be better to calculate which is closest to cursor
    const index = Math.floor(Math.random() * features.length);
    this.setState({ popupInfo: features[index].properties });
  }

  handleHover(event) {
    const isHoveringFeature = event.features.some(
      feature => feature.layer.id === 'data',
    );
    if (isHoveringFeature) {
      event.target.style.cursor = 'pointer'; // eslint-disable-line
    } else {
      event.target.style.cursor = 'grab'; // eslint-disable-line
    }
  }

  renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    return (
      <Wrapper>
        <MapSelect
          townArray={townArray}
          selectedTown={this.state.selectedTown}
          handleChange={e => this.handleSelection(e)}
        />
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          onClick={this.handleClick}
          onHover={_.throttle(this.handleHover, 100)}
          clickRadius={clickRadius}
          mapboxApiAccessToken="pk.eyJ1IjoiaHlwZXJmbHVpZCIsImEiOiJjaWpra3Q0MnIwMzRhdGZtNXAwMzRmNXhvIn0.tZzUmF9nGk2h28zx6PM13w"
        >
          {!!this.state.geoJSON && (
            <Source type="geojson" data={this.state.geoJSON}>
              <Layer
                type="symbol"
                id="data"
                layout={{
                  'icon-image': 'marker-15',
                  'icon-allow-overlap': true,
                }}
              />
            </Source>
          )}
          {this.renderPopup()}
        </ReactMapGL>
      </Wrapper>
    );
  }
}

export default memo(Map);
