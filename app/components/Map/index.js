/**
 *
 * Map
 *
 */

import React, { memo } from 'react';
import _ from 'lodash';

import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import axios from 'axios';
import MapSelect from './mapSelect';
import DetailSelect from './detailSelect';
import TypeSelect from './typeSelect';
import { townArray } from './townConstants';
import { detailArray } from './detailConstants';
import { typeArray } from './typeConstants';
import CityInfo from './cityInfo';
import CityPin from './cityPin';
import Wrapper from './Wrapper';

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
      selectedDetail: 'wic',
      selectedTown: 'Pittsburgh',
      selectedTypes: [],
      popupInfo: null,
      sites: [],
      allSites: [],
    };
  }

  componentDidMount() {
    axios.get('https://dev.stevesaylor.io/api/location/').then(res =>
      this.setState({
        allSites: res.data,
        sites: _.filter(res.data, site => site.wic),
      }),
    );
  }

  handlelocationSelection(event) {
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

  handleDetailSelection(event) {
    const totalSites = _.cloneDeep(this.state.allSites);
    const filter = event.target.value;

    if (filter === 'all') {
      this.setState({
        selectedDetail: filter,
        sites: totalSites,
      });
    } else {
      const filteredSites = _.filter(totalSites, site => site[filter]);
      this.setState({
        selectedDetail: filter,
        sites: filteredSites,
      });
    }
  }

  handleTypeSelection(event) {
    const totalSites = _.cloneDeep(this.state.allSites);
    const types = event.target.value;
    const filteredSites = types.length
      ? _.filter(totalSites, site => _.includes(types, site.type))
      : totalSites;
    this.setState({
      selectedTypes: types,
      sites: filteredSites,
    });
  }

  renderCityMarker = (city, index) => {
    if (city.longitude) {
      return (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
        >
          <CityPin
            size={20}
            onClick={() => this.setState({ popupInfo: city })}
          />
        </Marker>
      );
    }
    return true;
  };

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
          handleChange={e => this.handlelocationSelection(e)}
        />
        <DetailSelect
          detailArray={detailArray}
          selectedDetail={this.state.selectedDetail}
          handleChange={e => this.handleDetailSelection(e)}
        />
        <TypeSelect
          typeArray={typeArray}
          selectedTypes={this.state.selectedTypes}
          handleChange={e => this.handleTypeSelection(e)}
        />
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken="pk.eyJ1IjoiaHlwZXJmbHVpZCIsImEiOiJjaWpra3Q0MnIwMzRhdGZtNXAwMzRmNXhvIn0.tZzUmF9nGk2h28zx6PM13w"
        >
          {this.state.sites.map(this.renderCityMarker)}

          {this.renderPopup()}
        </ReactMapGL>
      </Wrapper>
    );
  }
}

export default memo(Map);
