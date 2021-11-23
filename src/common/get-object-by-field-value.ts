import objectPath from 'object-path';

/**
 * Return object in array by field value
 * @param obj
 * @param fieldname
 * @param fieldvalue
 * @returns
 */
export function getObjectByFieldValue(
    obj: any[],
    fieldname: string,
    fieldvalue: any,
): any {
  let found = false;
  let cp = 0;
  while (cp < obj.length && !found) {
    if (objectPath.get(obj[cp], fieldname) === fieldvalue) {
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
