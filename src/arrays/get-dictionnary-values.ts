export function getValuesFromDictionnary(dic: {[key: string]: any}): any[] {
    const keys = Object.keys(dic);
    return keys.map(key => dic[key]);
  }