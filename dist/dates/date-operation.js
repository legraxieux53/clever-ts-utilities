"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateOperationEnum = exports.dateOperation = void 0;
function dateOperation(params) {
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
exports.dateOperation = dateOperation;
var DateOperationEnum;
(function (DateOperationEnum) {
    DateOperationEnum[DateOperationEnum["DAYS_PLUS"] = 0] = "DAYS_PLUS";
    DateOperationEnum[DateOperationEnum["DAYS_MINUS"] = 1] = "DAYS_MINUS";
    DateOperationEnum[DateOperationEnum["MONTH_PLUS"] = 2] = "MONTH_PLUS";
    DateOperationEnum[DateOperationEnum["MONTH_MINUS"] = 3] = "MONTH_MINUS";
    DateOperationEnum[DateOperationEnum["YEAR_PLUS"] = 4] = "YEAR_PLUS";
    DateOperationEnum[DateOperationEnum["YEAR_MINUS"] = 5] = "YEAR_MINUS";
})(DateOperationEnum = exports.DateOperationEnum || (exports.DateOperationEnum = {}));
