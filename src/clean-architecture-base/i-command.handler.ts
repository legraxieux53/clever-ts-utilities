/**
 * @description Command handler interface
 * @date 22/03/2023 - 15:26:32
 *
 * @export
 * @interface ICommandHandler
 * @typedef {ICommandHandler}
 * @template C
 */
export interface ICommandHandler<C> {
    /**
     * @description Execute command handler
     * @date 22/03/2023 - 15:26:16
     *
     * @param {C} [command]
     * @returns {Promise<any>}
     */
    execute(command: C): Promise<any>;
}