// Converts api data to geoJSON points
// Might be better if this arrived from the server in this format

const convertToGeoJSON = ({ data }) => ({
  type: 'FeatureCollection',
  features: data.reduce((result, site) => {
    const { latitude, longitude } = site;
    if (longitude) {
      result.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          // GeoJSON takes lat/lon in reverse order
          coordinates: [longitude, latitude],
        },
        properties: site,
      });
    }
    return result;
  }, []),
});

export default convertToGeoJSON;
