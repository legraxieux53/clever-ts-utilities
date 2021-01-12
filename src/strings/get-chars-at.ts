export function getCharsAt(paramList: {[key: string]: string}, ofs: number): {[key: string]: string} {
    const keys = Object.keys(paramList);
    const list: any = {};
    keys.forEach(key => {
      try {
        list[key] = paramList[key].charAt(ofs);
      } catch {
        list[key] = undefined;
      }
    });
    return list;
  }