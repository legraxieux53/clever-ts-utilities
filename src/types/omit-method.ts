/**
 * @description Omit methods from type
 * @date 31/03/2023 - 16:05:33
 *
 * @export
 * @typedef {OmitMethods}
 * @template T
 */
export type OmitMethods<T> = {
    [K in keyof T as T[K] extends Function ? never : K]: T[K]
  };