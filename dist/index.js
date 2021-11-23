"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const objects_equals_1 = require("./common/objects-equals");
__exportStar(require("./common"), exports);
__exportStar(require("./arrays"), exports);
__exportStar(require("./dates"), exports);
__exportStar(require("./files"), exports);
__exportStar(require("./strings"), exports);
__exportStar(require("./core-patterns"), exports);
__exportStar(require("./requests-pendding"), exports);
const objs = [
    {
        a: 'al',
        b: 'sd',
        c: {
            aq: 'az'
        }
    },
    {
        a: 'al',
        b: 'sd',
        c: {
            aq: 'az'
        }
    },
    {
        a: 'al',
        b: 'sd',
        c: {
            aq: 'aza'
        }
    },
];
console.log(new Set(objs));
console.log(objects_equals_1.setObjectsEquals(objs));
