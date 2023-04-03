export function trimObject(obj: any): any {
    if (typeof obj == 'string') {
        return obj.trim();
    }
    if (typeof obj != 'object') {
        return obj;
    }

    if (obj && obj.length > 0) {
        for (let item of obj) {
            item = trimObject(item);
        }
    }
    let result = obj;
    const keys = Object.keys(obj);

    for (let key of keys) {
        obj[key] = trimObject(obj[key]);
    }
    return result;
}