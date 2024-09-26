/**
 * @description Interface for mapping between domain and data layer
 */
export interface IMapFrom<I, O> {
    /**
     * @description Map from domain to data layer
     * @param param
     */
    mapFrom(param: I): O | Promise<O>;
}

/**
 * @description Interface for mapping between domain and data layer
 */
export interface IMapTo<I, O> {
    /**
     * @description Map from data to domain layer
     * @param param
     */
    mapTo(param: O): I | Promise<I>;
}

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
export interface IMapper<I, O> extends IMapFrom<I, O>, IMapTo<I, O>{}
