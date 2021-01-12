import {jsType} from "./jstype";

export function copy(obj: any): any {
    if (jsType(obj) === 'undefined') {
        return undefined;
      }
    if (jsType(obj) === 'array') {
      return [...obj];
    }
    if (jsType(obj) === 'object') {
      return {...obj};
    }
    return JSON.parse(JSON.stringify(obj));
  }
