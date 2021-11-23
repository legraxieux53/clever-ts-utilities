export function dateMonthPeriod(date: Date): Array<Date> {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);
    return [firstDate, lastDate];
}

export function dateYearPeriod(date: Date): Array<Date> {
    const year = date.getFullYear();
    const firstDate = new Date(year, 0, 1);
    const lastDate = new Date(year, 11, 31);
    return [firstDate, lastDate];
}