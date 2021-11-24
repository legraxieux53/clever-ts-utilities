import { flatten } from 'flat';
import { copy, isUndefinedOrNull } from '.';
import stringify from 'json-stable-stringify';
import objectPath from 'object-path';

/**
 * 
 * @param obj1 
 * @param obj2 
 * @param ignoreProps 
 * @returns 
 */
export function objectsEquals(
    obj1: any,
    obj2: any,
    ignoreProps?: string[]): boolean {
    const _obj1 = copy(obj1);
    const _obj2 = copy(obj2);
    if (isUndefinedOrNull(_obj1) && isUndefinedOrNull(_obj2)) {
        return true;
    }

    if (isUndefinedOrNull(_obj1) || isUndefinedOrNull(_obj2)) {
        return false;
    }

    if (ignoreProps && ignoreProps?.length > 0) {
        for (const prop of ignoreProps) {
            objectPath.set(_obj1, prop, undefined);
            objectPath.set(_obj2, prop, undefined);
        }
    }

    const obj1Flatten: any = flatten(_obj1);
    const obj2Flatten: any = flatten(_obj2);

    const obj1String: string = stringify(obj1Flatten);
    const obj2String: string = stringify(obj2Flatten);

    return obj1String == obj2String;
}

/**
 * 
 * @param objs 
 * @param ignoreProps 
 * @returns 
 */
export function allObjectsEquals(
    objs: any[],
    ignoreProps?: string[]): boolean {
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
export function arrayObjectContain(array: any[], obj: any,
    ignoreProps?: string[]): boolean {
    const _obj = copy(obj);
    const _array = copy(array);

    if (ignoreProps && ignoreProps?.length > 0) {
        for (const prop of ignoreProps) {
            _array?.map(item => objectPath.set(item, prop, undefined));
            objectPath.set(_obj, prop, undefined);
        }
    }

    const arrayString = _array.map(item => stringify(item));
    const objString = stringify(_obj);


    return arrayString.includes(objString);
}

/**
 * 
 * @param objs 
 * @param ignoreProps 
 */
export function setObjects(
    objs: any[],
    ignoreProps?: string[]): any[] {
    const _objs = copy(objs);

    if (ignoreProps && ignoreProps?.length > 0) {
        for (const prop of ignoreProps) {
            _objs?.map(item => {
                objectPath.set(item, prop, undefined);
            });
        }
    }
    const objsString: string[] = _objs?.map(item => stringify(item));
    const objsStringSet = [...new Set(objsString)];

    return objsStringSet?.map(item => {
        try {
            return JSON.parse(item);
        } catch (e) {
            // console.log(e);
        }
    });
}