
import { getCharsAt } from "../strings";
import { getValuesFromDictionnary } from "./get-dictionnary-values";
import { isAllEqual } from "./is-all-equal";


export function strRemoveBeginingCommonChars(params: {[key: string]: string}): {[key: string]: string} {
  let paramsCopy = {...params};
  let cp = -1;

  do {
    const keys = Object.keys(paramsCopy);
    cp++;
    keys.forEach(key => {
      paramsCopy[key] = params[key].substring(cp);
    });
    
  } while(isAllEqual(getValuesFromDictionnary(getCharsAt(params, cp))));

  return paramsCopy;
}




