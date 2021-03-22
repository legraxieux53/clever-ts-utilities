import { copy, isUndefinedOrNull, jsType } from "../common";

export function deleteFromArray(array: any[], item: any): any[] | boolean {
  if (isUndefinedOrNull(array)) {
    return false;
  }
  if (isUndefinedOrNull(item)) {
    return array;
  }

  let arr = copy(array);
  if (jsType(item) === "array") {
    item.map((itm: any) => {
      if (array.find((v) => v === itm)) {
        arr = arr
          .slice(
            0,
            arr.findIndex((v) => v === itm)
          )
          .concat(arr.slice(arr.findIndex((v) => v === itm) + 1));
      }
    });
    return arr;
  }
  if (!array.find((v) => v === item)) {
    return arr;
  }
  return arr
    .slice(
      0,
      arr.findIndex((v) => v === item)
    )
    .concat(arr.slice(arr.findIndex((v) => v === item) + 1));
}
