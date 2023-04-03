/**
 * @description Auto mapper
 * 
 * @example
 * const source = {
 *  name: "John",
 * surname: "Doe",
 * age: 30
 * }
 * 
 * interface IDestination {
 * firstName: string;
 * lastName: string;
 * age: number;
 * }
 * 
 * const destination = new AutoMapper()
 * .forSource(Object)
 * .forDestination(IDestination)
 * .mapFrom("name", "firstName") // Optional - if not specified, it will be mapped by default
 * .mapFrom("surname", "lastName") // Optional - if not specified, it will be mapped by default
 * .execute(source);
 * 
 * @date 03/04/2023 - 13:52:28
 *
 * @class AutoMapper
 * @typedef {AutoMapper}
 */
export class AutoMapper {
    private sourceType!: any;
    private destinationType!: any;
    private mappings: Map<string, string> = new Map();
  
    /**
     * @description Map source property to destination property
     * @date 03/04/2023 - 13:54:36
     *
     * @param {string} sourceProperty
     * @param {string} destinationProperty
     * @returns {AutoMapper}
     */
    mapFrom(sourceProperty: string, destinationProperty: string): AutoMapper {
      this.mappings.set(destinationProperty, sourceProperty);
      return this;
    }
  
    /**
     * @description Set source type
     * @date 03/04/2023 - 13:54:45
     *
     * @param {new () => any} sourceType
     * @returns {AutoMapper}
     */
    forSource(sourceType: new () => any): AutoMapper {
      this.sourceType = sourceType;
      return this;
    }
  
    /**
     * @description Set destination type
     * @date 03/04/2023 - 13:54:53
     *
     * @param {new () => any} destinationType
     * @returns {AutoMapper}
     */
    forDestination(destinationType: new () => any): AutoMapper {
      this.destinationType = destinationType;
      return this;
    }
  
    /**
     * @description Get property value from object
     * @date 03/04/2023 - 13:54:59
     *
     * @private
     * @param {*} obj
     * @param {string} prop
     * @returns {*}
     */
    private getPropertyValue(obj: any, prop: string): any {
      if (!obj.hasOwnProperty(prop)) return undefined;
      return obj[prop];
    }
  
    /**
     * @description Map properties from source to destination
     * @date 03/04/2023 - 13:55:05
     *
     * @private
     * @param {*} source
     * @param {*} destination
     */
    private mapProperties(source: any, destination: any) {
      const destinationKeys = Object.keys(destination);
  
      for (const destinationKey of destinationKeys) {
        const sourceKey = this.mappings.get(destinationKey) || destinationKey;
        destination[destinationKey] = this.getPropertyValue(source, sourceKey);
      }
    }
  
    /**
     * @description Execute mapping
     * @date 03/04/2023 - 13:55:11
     *
     * @param {*} source
     * @returns {*}
     */
    execute(source: any): any {
      if (!this.sourceType || !this.destinationType) {
        throw new Error(
          "You must specify both source and destination types before mapping"
        );
      }
  
      const destination = new this.destinationType();
      const sourceObject = new this.sourceType();
      Object.assign(sourceObject, source);
  
      this.mapProperties(sourceObject, destination);
      return destination;
    }
  }