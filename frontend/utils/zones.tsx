export const isInside = (point: Array<any>, polygon: Array<Array<any>>) => {
  const latArray = polygon.map((item) => parseFloat(item[0]));
  const longArray = polygon.map((item) => parseFloat(item[1]));

  let minLat = Number.MAX_SAFE_INTEGER;
  let maxLat = Number.MIN_SAFE_INTEGER;

  let minLong = Number.MAX_SAFE_INTEGER;
  let maxLong = Number.MIN_SAFE_INTEGER;

  for (const i of latArray) {

    if (i < minLat) {
      minLat = i;
    }
    if (i > maxLat) {
      maxLat = i;
    }
  }

  for (const i of longArray) {

    if (i < minLong) {
      minLong = i;
    }
    if (i > maxLong) {
      maxLong = i;
    }
  }

  if (
    parseFloat(point[0]) >= minLat &&
    parseFloat(point[0]) <= maxLat &&
    parseFloat(point[1]) >= minLong &&
    parseFloat(point[1]) <= maxLong
  ) {
    return true;
  }
};


export const returnInsideZone = (location: Array<any>, zoneData: Array<any>) => {
    for (const i of zoneData) {
        if (isInside(location, i[1])) {
            return i[0]
        }
    }
}