// It's good to have a large click radius for mobile to be forgiving with touch precision
// However it is worthwhile to calculate the closest feature in case there are several
// features within the click radius and you are trying to be precise.

const getClosestSite = (features, pointerCoords) => {
  const [pointerLng, pointerLat] = pointerCoords;
  const first = features.shift();
  const closest = {
    offset:
      Math.abs(pointerLng - first.properties.longitude) +
      Math.abs(pointerLat - first.properties.latitude),
    properties: first.properties,
  };
  features.forEach(({ properties }) => {
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

export default getClosestSite;
