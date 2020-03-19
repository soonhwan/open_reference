function clone(d) {
  return new Date(d.getTime());
}

export function isDayBefore(d1, d2) {
  const day1 = clone(d1).setHours(0, 0, 0, 0);
  const day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 < day2;
}

export function isPricingTicket(pricingTicket) {
  if (pricingTicket && pricingTicket.expiredDate && !isDayBefore(pricingTicket.expiredDate, new Date())) {
    return true;
  }

  return false;
}

export function objIsEmpty(obj) {
  if (obj === null || obj === undefined || obj === '') {
    return true;
  }

  if (Array.isArray(obj) && obj.length === 0) {
    return true;
  }

  if (typeof obj === 'string') {
    const blankPattern = /^\s+|\s+$/g;

    if (obj.replace(blankPattern, '') === '' || obj.toLowerCase() === 'undefined' || obj.toLowerCase() === 'null') {
      return true;
    }
  }

  return false;
}

export function splitChunk(array, chunkSize) {
  return [].concat.apply(
    [],
    array.map(function(elem, i) {
      return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
    })
  );
}
