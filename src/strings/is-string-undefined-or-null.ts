export function isStringUndefinedOrNullOrEmpty(data: string): boolean {
    return data === undefined || data === null || data.replace(/\s/g, '') === '';
}