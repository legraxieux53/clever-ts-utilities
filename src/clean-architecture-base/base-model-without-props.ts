/**
 * @description Base model without props
 * @date 29/03/2023 - 12:33:01
 *
 * @export
 * @class BaseModelWithoutProps
 * @typedef {BaseModelWithoutProps}
 * @template T
 */
export class BaseModelWithoutProps<T> {
  /**
   * Creates an instance of BaseModelWithoutProps.
   * @date 29/03/2023 - 12:33:25
   *
   * @constructor
   * @param {?T} [data]
   */
  constructor(data?: T) {
    Object.assign(this, data);
  }

  /**
   * @description Update model
   * @date 29/03/2023 - 12:33:10
   *
   * @param {(Omit<T, 'id' | 'createdAt' | 'updatedAt'>)} data
   */
  update(data: Omit<T, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>) {
    Object.assign(this, data);
  }
}
