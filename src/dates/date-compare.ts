export function dateCompare(first: Date, operator: DateCompareOperator, second: Date): boolean {
    switch(operator) {
        case DateCompareOperator.EQUAL_TO:
            return first.getTime() === second.getTime();
        case DateCompareOperator.GREATER_OR_EQUAL_TO:
            return first.getTime() >= second.getTime();
        case DateCompareOperator.GREATER_THAN:
            return first.getTime() > second.getTime();
        case DateCompareOperator.LOWER_OR_EQUAL_TO:
            return first.getTime() <= second.getTime();
        case DateCompareOperator.LOWER_THAN:
            return first.getTime() < second.getTime();
        default:
            throw new Error("Operator arg hasn't been defined in dateCompare function.");
    }
}

export enum DateCompareOperator {
    GREATER_THAN, LOWER_THAN, EQUAL_TO, GREATER_OR_EQUAL_TO, LOWER_OR_EQUAL_TO
}
