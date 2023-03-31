import { OmitMethods } from '../types/omit-method';
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
   * @date 31/03/2023 - 16:07:39
   *
   * @constructor
   * @param {?OmitMethods<T>} [data]
   */
  constructor(data?: OmitMethods<T>) {
    Object.assign(this, data);
  }

  /**
   * @description Update model
   * @date 31/03/2023 - 16:07:27
   *
   * @param {(Omit<OmitMethods<T>, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>)} data
   */
  update(data: Omit<OmitMethods<T>, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>) {
    Object.assign(this, data);
  }
}
