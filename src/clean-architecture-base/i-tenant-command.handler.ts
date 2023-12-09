/**
 * @description Command handler interface
 * @date 22/03/2023 - 15:26:32
 *
 * @export
 * @interface ICommandHandler
 * @typedef {ICommandHandler}
 * @template C
 */
export interface ITenantCommandHandler<C, T> {
    /**
     * @description Execute command handler
     * @date 22/03/2023 - 15:26:16
     *
     * @param {C} [command]
     * @param {T} [tenant]
     * @returns {Promise<any>}
     */
    execute(command: C, tenant: T): Promise<any>;
}