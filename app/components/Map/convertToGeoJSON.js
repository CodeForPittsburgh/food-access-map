// Converts api data to geoJSON points. Might be better if this arrived from the server in this format
// siteLookup is used to keep geoJSON slim for better map performance
// https://docs.mapbox.com/help/troubleshooting/working-with-large-geojson-data/#cleaning-up-your-data

const convertToGeoJSON = ({ data }) => {
  const siteLookup = {};
  const geoJSON = {
    type: 'FeatureCollection',
    features: data.reduce((result, site) => {
      const { latitude, longitude, name, type, id } = site;
      if (longitude) {
        siteLookup[id] = site;
        result.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            // GeoJSON takes lat/lon in reverse order
            coordinates: [longitude, latitude],
          },
          properties: { name, type, id },
        });
      }
      return result;
    }, []),
  };
  return { siteLookup, geoJSON };
};

export default convertToGeoJSON;
