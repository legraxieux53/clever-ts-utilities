/**
 * @description Query handler interface
 * @date 22/03/2023 - 15:27:27
 *
 * @deprecated Use IQueryHandler with context instead
 * @export
 * @interface IQueryHandler
 * @typedef {IQueryHandler}
 * @template C
 */
export interface ITenantQueryHandler<Q, R, T> {
    /**
     * @description Execute query handler
     * @date 22/03/2023 - 15:27:49
     *
     * @param {Q} [query]
     * @param {T} [tenant]
     * @returns {Promise<R>}
     */
    handle(query: Q, tenantId: T): Promise<R>;
}
