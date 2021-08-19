export function dateMonthPeriod(date: Date): Array<Date> {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);
    return [firstDate, lastDate];
}