/**
 * @description Mapper interface for mapping between domain and data layer
 * @date 22/03/2023 - 11:24:26
 *
 * @export
 * @interface Mapper
 * @typedef {Mapper}
 * @template I
 * @template O
 */
export interface IMapper<I, O> {
    /**
     * @description Map from domain to data layer
     * @date 22/03/2023 - 11:25:00
     *
     * @param {I} param
     * @returns {O}
     */
    mapFrom(param: I): O;

    /**
     * @description Map from data to domain layer
     * @date 22/03/2023 - 11:25:13
     *
     * @param {O} param
     * @returns {I}
     */
    mapTo(param: O): I;
}