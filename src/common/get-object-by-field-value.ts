export function getObjectByFieldValue(
  obj: any[],
  fieldname: string,
  fieldvalue: any
): any {
  let found = false;
  let cp = 0;
  while (cp < obj.length && !found) {
    if (obj[cp][fieldname] === fieldvalue) {
      found = true;
    } else {
      cp++;
    }
  }

  if (found) {
    return obj[cp];
  }
  return -1;
}
