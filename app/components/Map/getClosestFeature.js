// It's good to have a large click radius for mobile to be forgiving with touch precision
// However it is worthwhile to calculate the closest feature in case there are several
// features within the click radius and you are trying to be precise.

const getClosestFeature = event => {
  const [pointerLng, pointerLat] = event.lngLat;
  const first = event.features.shift();
  const closest = {
    offset:
      Math.abs(pointerLng - first.longitude) +
      Math.abs(pointerLat - first.latitude),
    properties: first.properties,
  };
  event.features.forEach(({ properties }) => {
    const currOffset =
      Math.abs(pointerLng - properties.longitude) +
      Math.abs(pointerLat - properties.latitude);
    if (currOffset < closest.offset) {
      closest.offset = currOffset;
      closest.properties = properties;
    }
  });
  return closest.properties;
};

export default getClosestFeature;
