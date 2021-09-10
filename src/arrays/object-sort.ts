import { isUndefinedOrNull } from "../common";
import { isStringUndefinedOrNullOrEmpty } from "../strings";

export function objectSort(arr: Array<any>, prop: string, isAscendent: boolean = true): Array<any> {
    if (isUndefinedOrNull(arr)) {
        return arr;
    }

    if (isStringUndefinedOrNullOrEmpty(prop)) {
        return arr;
    }

    return arr.sort((a, b) => {
        if (isAscendent) {
            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;
        } else {
            if (a[prop] < b[prop]) return 1;
            if (a[prop] > b[prop]) return -1;
        }
        return 0;
    })
}