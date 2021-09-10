export function isStringUndefinedOrNullOrEmpty(data: string | String): boolean | Boolean {
    return data === undefined || data === null || data.replace(/\s/g, '') === '';
}