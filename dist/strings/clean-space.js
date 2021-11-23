"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanSpace = void 0;
/**
 * Supprimes les espaces d'une chaine de caractères
 * @param str
 */
function cleanSpace(str) {
    return str.replace(/\s/g, '');
}
exports.cleanSpace = cleanSpace;
