export function convertToGeoJSON({ data }) {
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
