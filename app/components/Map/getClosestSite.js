// It's good to have a large click radius for mobile to be forgiving with touch precision
// However it is worthwhile to calculate the closest feature in case there are several
// features within the click radius and you are trying to be precise.

const getClosestSite = (features, pointerCoords) => {
  const [pointerLng, pointerLat] = pointerCoords;
  const closest = {};
  features.forEach(({ properties }) => {
    const currOffset =
      Math.abs(pointerLng - properties.longitude) +
      Math.abs(pointerLat - properties.latitude);
    if (!closest.offset || currOffset < closest.offset) {
      closest.offset = currOffset;
      closest.properties = properties;
    }
  });
  return closest.properties;
};

export default getClosestSite;
