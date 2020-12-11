"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function paginate(params) {
    if (!params.data) {
        return [];
    }
    var pages = params.data.slice(params.pageSize * params.pageIndex, params.pageSize * params.pageIndex + params.pageSize);
    return pages;
}
exports.paginate = paginate;
