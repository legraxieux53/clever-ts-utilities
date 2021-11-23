"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsType = void 0;
/**
 * Determine le type des objets et variables en JS
 */
function jsType(obj) {
    if (obj === null) {
        return 'null';
    }
    if (obj === undefined) {
        return 'undefined';
    }
    if (typeof obj === 'string') {
        return 'string';
    }
    if (obj.length >= 0) {
        return 'array';
    }
    return typeof obj;
}
exports.jsType = jsType;
