/**
 * @description Query handler interface
 * @date 22/03/2023 - 15:27:27
 *
 * @export
 * @interface IQueryHandler
 * @typedef {IQueryHandler}
 * @template C
 */
export interface ITenantQueryHandler<Q, R> {
    /**
     * @description Execute query handler
     * @date 22/03/2023 - 15:27:49
     *
     * @param {Q} [query]
     * @param {string|number} [tenantId]
     * @returns {Promise<R>}
     */
    handle(query: Q, tenantId: string|number): Promise<R>;
}