export declare function dateOperation(params: {
    date: Date;
    amount: number;
    operation: DateOperationEnum;
}): Date;
export declare enum DateOperationEnum {
    DAYS_PLUS = 0,
    DAYS_MINUS = 1,
    MONTH_PLUS = 2,
    MONTH_MINUS = 3,
    YEAR_PLUS = 4,
    YEAR_MINUS = 5
}
