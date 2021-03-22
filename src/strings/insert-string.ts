export function insertString(params: {
  str: string;
  toAdd: string;
  anchor: string;
  position: "before" | "after";
}): string {
  if (params.position === "before") {
    const indexAncor = params.str.search(params.anchor);
    const result =
      params.str.slice(0, indexAncor - 1) +
      params.toAdd +
      params.str.slice(indexAncor);
    return result;
  } else {
    const indexAncor = params.str.search(params.anchor) + params.anchor.length;
    const result =
      params.str.slice(0, indexAncor) +
      params.toAdd +
      params.str.slice(indexAncor);
    return result;
  }
}
