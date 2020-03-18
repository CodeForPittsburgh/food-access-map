/**
 *
 * Map
 *
 */

import React, { memo, useEffect, useState } from 'react';
import _ from 'lodash';

import ReactMapGL, { Source, Layer, Popup } from 'react-map-gl';
import axios from 'axios';
import MapSelect from './mapSelect';
import { townArray } from './townConstants';
import CityInfo from './cityInfo';
import Wrapper from './Wrapper';
import { convertToGeoJSON } from './utils';

const defaultViewport = {
  width: '100%',
  height: '100%',
  latitude: 40.4406,
  longitude: -79.9659,
  zoom: 12,
};

function Map(/* props */) {
  const [viewport, setViewport] = useState(defaultViewport);
  const [popupInfo, setPopupInfo] = useState(null);
  const [geoJSON, setGeoJSON] = useState(null);
  const [selectedTown, setSelectedTown] = useState('Pittsburgh');

  useEffect(() => {
    axios
      .get('https://dev.stevesaylor.io/api/location/')
      .then(res => setGeoJSON(convertToGeoJSON(res)));
  }, []);

  function handleSelection(event) {
    const oldView = _.clone(viewport);
    const place = event.target.value;
    const { latitude, longitude } = _.find(townArray, { place });
    const newView = _.assign({}, oldView, {
      latitude,
      longitude,
    });

    setViewport(newView);
    setSelectedTown(place);
  }

  function handleClick(event) {
    // Filter out features that we didn't provide
    const [lng, lat] = event.lngLat;
    const features = event.features
      ? event.features.filter(feature => feature.layer.id === 'data')
      : [];
    if (features.length) {
      setPopupInfo({
        lng,
        lat,
        features: features.map(feat => feat.properties),
      });
    } else {
      setPopupInfo(null);
    }
  }

  function renderPopup() {
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.lng}
          latitude={popupInfo.lat}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
        >
          <CityInfo features={popupInfo.features} />
        </Popup>
      )
    );
  }

  return (
    <Wrapper>
      <MapSelect
        townArray={townArray}
        selectedTown={selectedTown}
        handleChange={handleSelection}
      />
      <ReactMapGL
        {...viewport}
        onViewportChange={vport => setViewport(vport)}
        onClick={handleClick}
        clickRadius={10}
        interactiveLayerIds={['data']}
        mapboxApiAccessToken="pk.eyJ1IjoiaHlwZXJmbHVpZCIsImEiOiJjaWpra3Q0MnIwMzRhdGZtNXAwMzRmNXhvIn0.tZzUmF9nGk2h28zx6PM13w"
      >
        {!!geoJSON && (
          <Source type="geojson" data={geoJSON}>
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
        {renderPopup()}
      </ReactMapGL>
    </Wrapper>
  );
}

export default memo(Map);
