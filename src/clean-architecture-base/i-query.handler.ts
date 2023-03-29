/**
 * @description Query handler interface
 * @date 22/03/2023 - 15:27:27
 *
 * @export
 * @interface IQueryHandler
 * @typedef {IQueryHandler}
 * @template C
 */
export interface IQueryHandler<Q, R> {
    /**
     * @description Execute query handler
     * @date 22/03/2023 - 15:27:49
     *
     * @param {Q} [query]
     * @returns {Promise<R>}
     */
    handle(query: Q): Promise<R>;
}