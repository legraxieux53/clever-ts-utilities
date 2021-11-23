import { flatten } from 'flat';
import objectPath from 'object-path';
import { isUndefinedOrNull } from '.';

/**
 * 
 * @param obj1 
 * @param obj2 
 * @param ignoreProps 
 * @returns 
 */
export function objectsEquals(obj1: any, obj2: any, ignoreProps?: string[]): boolean {
    if (isUndefinedOrNull(obj1) && isUndefinedOrNull(obj2)) {
        return true;
    }

    if (isUndefinedOrNull(obj1) || isUndefinedOrNull(obj2)) {
        return false;
    }

    const obj1Flatten: any = flatten(obj1);
    const obj2Flatten: any = flatten(obj2);
    
    for (const key1 of Object.keys(obj1Flatten)) {
        if (!ignoreProps ||
            (ignoreProps && !ignoreProps.includes(key1))) {
            if (obj2Flatten[key1] !== obj1Flatten[key1]) {
                return false;
            }
        }
    }
    return true;
}

/**
 * 
 * @param objs 
 * @param ignoreProps 
 * @returns 
 */
export function allObjectsEquals(objs: any[], ignoreProps?: string[]): boolean {
    const firstObj = objs[0];
    for (const obj of objs) {
        const result = objectsEquals(firstObj, obj, ignoreProps);
        if (!result) {
            return false;
        }
    }
    return true;
}

/**
 * 
 * @param objs 
 * @param obj 
 * @param ignoreProps 
 * @returns 
 */
export function arrayObjectContain(array: any[], obj: any, ignoreProps?: string[]): boolean {
    for (const _obj of array) {
        if (objectsEquals(_obj, obj, ignoreProps)) {
            return true;
        }
    }
    return false;
}

/**
 * 
 * @param objs 
 * @param ignoreProps 
 */
export function setObjectsEquals(objs: any[], ignoreProps?: string[]): any[] {
    const result = [];
    for (const obj of objs) {
        if (!arrayObjectContain(result, obj, ignoreProps)) {
            result.push(obj);
        }
    }
    return result;
}