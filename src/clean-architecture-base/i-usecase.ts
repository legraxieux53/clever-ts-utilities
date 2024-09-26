/**
 * @description Usecase interface
 * @date 22/03/2023 - 11:23:40
 *
 * @export
 * @interface Usecase
 * @typedef {IUsecase}
 * @template C
 * @template T
 */
export interface IUsecase<C, T, CTX = any> {
    /**
     * @description Execute usecase
     * @date 22/03/2023 - 11:24:16
     *
     * @param {?C} [command]
     * @param {?CTX} [ctx]
     * @returns {T}
     */
    execute(command?: C, ctx?: CTX): T;
}
