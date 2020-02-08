/**
 *
 * Map
 *
 */

import React, { memo, createRef } from 'react';
import _ from 'lodash';
import ReactMapGL, { Source, Layer, Popup } from 'react-map-gl';
import axios from 'axios';

import MapSelect from './mapSelect';
import { townArray } from './townConstants';
import CityInfo from './cityInfo';
import Wrapper from './Wrapper';
import getClosestSite from './getClosestSite';
import convertToGeoJSON from './convertToGeoJSON';
import iconCartSrc from '../../images/icon-cart.svg';
import iconCarrotSrc from '../../images/icon-carrot.svg';

// Mapbox addImage takes an HTMLImageElement, ImageData, or ImageBitmap
const iconCartElement = new Image(24, 24);
iconCartElement.src = iconCartSrc;
const iconCarrotElement = new Image(30, 30);
iconCarrotElement.src = iconCarrotSrc;

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
    this.mapRef = createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get('https://dev.stevesaylor.io/api/location/');
    this.setState({ geoJSON: convertToGeoJSON(res) });
    // Add the icons to use in the Layer layout below
    const mapInstance = this.mapRef.current.getMap();
    mapInstance.addImage('icon-cart', iconCartElement);
    mapInstance.addImage('icon-carrot', iconCarrotElement);
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

  handleClick(event) {
    if (!event.features.length) {
      this.setState({ popupInfo: null });
      return;
    }
    const closestSite = getClosestSite(event.features, event.lngLat);
    this.setState({ popupInfo: closestSite });
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
          ref={this.mapRef}
          clickRadius={clickRadius}
          minZoom={9}
          maxZoom={18}
          interactiveLayerIds={['data']}
          mapboxApiAccessToken="pk.eyJ1IjoiaHlwZXJmbHVpZCIsImEiOiJjaWpra3Q0MnIwMzRhdGZtNXAwMzRmNXhvIn0.tZzUmF9nGk2h28zx6PM13w"
        >
          {!!this.state.geoJSON && (
            <Source type="geojson" data={this.state.geoJSON}>
              <Layer
                type="symbol"
                id="data"
                layout={{
                  'icon-image': [
                    'match',
                    ['get', 'type'],
                    'Supermarket',
                    'icon-carrot',
                    'icon-cart',
                  ],
                  'icon-ignore-placement': true,
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
