"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
function paginate(params) {
    if (!params.data) {
        return [];
    }
    const pages = params.data.slice(params.pageSize * params.indexPage, params.pageSize * params.indexPage + params.pageSize);
    return pages;
}
exports.paginate = paginate;
