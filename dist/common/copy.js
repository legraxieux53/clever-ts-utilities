"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copy = void 0;
const jstype_1 = require("./jstype");
function copy(obj) {
    if (jstype_1.jsType(obj) === 'undefined') {
        return undefined;
    }
    if (jstype_1.jsType(obj) === 'array') {
        return [...obj];
    }
    if (jstype_1.jsType(obj) === 'object') {
        return Object.assign({}, obj);
    }
    return JSON.parse(JSON.stringify(obj));
}
exports.copy = copy;
