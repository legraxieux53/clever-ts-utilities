import { jsType } from "./jstype";

export function isUndefinedOrNull(data: any): boolean {
  if (jsType(data) === "object") {
    return !(Object.keys(data).length > 0);
  }
  return data === undefined || data === null || data === 0;
}
