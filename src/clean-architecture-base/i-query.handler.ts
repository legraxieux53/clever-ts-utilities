/**
 * @description Query handler interface
 * @date 22/03/2023 - 15:27:27
 *
 * @export
 * @interface IQueryHandler
 * @typedef {IQueryHandler}
 * @template C
 */
export interface IQueryHandler<Q, R, CTX = any> {
    /**
     * @description Execute query handler
     * @date 22/03/2023 - 15:27:49
     *
     * @param {Q} [query]
     * @param {CTX} [ctx]
     * @returns {Promise<R>}
     */
    handle(query: Q, ctx?: CTX):  R | Promise<R>;
}
