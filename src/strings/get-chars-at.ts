import objectPath from 'object-path';

/**
 * Get char at
 * @param paramList 
 * @param ofs 
 * @returns 
 */
export function getCharsAt(paramList: { [key: string]: string },
    ofs: number): { [key: string]: string } {
  const keys = Object.keys(paramList);
  const list: any = {};
  keys.forEach((key) => {
    try {
      objectPath.set(list, key, objectPath.get(paramList, key).charAt(ofs));
    } catch {
      objectPath.set(list, key, undefined);
    }
  });
  return list;
}
