export const isInside = (point: Array<any>, polygon: Array<Array<any>>) => {
  const latArray = polygon.map((item) => item[0]);
  const longArray = polygon.map((item) => item[1]);

  let minLat = Number.MAX_SAFE_INTEGER;
  let maxLat = Number.MIN_SAFE_INTEGER;

  let minLong = Number.MAX_SAFE_INTEGER;
  let maxLong = Number.MIN_SAFE_INTEGER;

  for (const i of latArray) {
    const floatI = parseFloat(i);
    if (floatI < minLat) {
      minLat = floatI;
    }
    if (floatI > maxLat) {
      maxLat = floatI;
    }
  }

  for (const i of longArray) {
    const floatI = parseFloat(i);
    if (floatI < minLong) {
      minLong = floatI;
    }
    if (floatI > maxLong) {
      maxLong = floatI;
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
