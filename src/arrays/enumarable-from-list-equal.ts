export function enumarableFromListEqual(
  list: any[],
  column: string,
  value: any
): any[] {
  const subList: any[] = [];
  if (list == null) {
    return subList;
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i][column] === value) {
      subList.push(list[i]);
    }
  }
  return subList;
}
