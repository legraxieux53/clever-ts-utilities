export function isAllEqual(chars: any[]): boolean {
    return chars
      .map(char => ({char: char, equal: false}))
      .reduce((pre, cur) => {
        return {char: cur.char, equal: pre.char === cur.char};
      })
      .equal;
  }