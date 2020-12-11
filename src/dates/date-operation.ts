export function dateOperation(params: {date: Date, amount: number, operation: DateOperationEnum}): Date {
    switch (params.operation) {
      case DateOperationEnum.DAYS_MINUS:
        return new Date(params.date.setDate(params.date.getDate() - params.amount));
      case DateOperationEnum.DAYS_PLUS:
        return new Date(params.date.setDate(params.date.getDate() + params.amount));
      case DateOperationEnum.MONTH_MINUS:
        return new Date(params.date.setMonth(params.date.getMonth() - params.amount));
      case DateOperationEnum.MONTH_PLUS:
        return new Date(params.date.setMonth(params.date.getMonth() + params.amount));
      case DateOperationEnum.YEAR_MINUS:
        return new Date(params.date.setFullYear(params.date.getFullYear() - params.amount));
      case DateOperationEnum.YEAR_PLUS:
        return new Date(params.date.setFullYear(params.date.getFullYear() + params.amount));

      default:
        return new Date(params.date.setDate(params.date.getDate() + params.amount));
    }
  }

  export enum DateOperationEnum {
    DAYS_PLUS, DAYS_MINUS, MONTH_PLUS, MONTH_MINUS, YEAR_PLUS, YEAR_MINUS
  }
  