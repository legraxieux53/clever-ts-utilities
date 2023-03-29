import { BaseModelWithoutProps } from './base-model-without-props';

/**
 * @description Base model
 * @date 29/03/2023 - 12:33:49
 *
 * @export
 * @class BaseModel
 * @typedef {BaseModel}
 * @template T
 * @extends {BaseModelWithoutProps<T>}
 */
export class BaseModel<T> extends BaseModelWithoutProps<T> {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
