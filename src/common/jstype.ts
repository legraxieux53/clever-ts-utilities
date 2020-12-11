/**
 * Determine le type des objets et variables en JS
 */
export function jsType(obj: any): string {
    if (obj === null) {
      return 'null';
    }
    if (obj === undefined) {
      return 'undefined';
    }
    if (typeof obj === 'string') {
      return 'string';
    }
    if (obj.length >= 0) {
      return 'array';
    }
    return typeof obj;
  }
  