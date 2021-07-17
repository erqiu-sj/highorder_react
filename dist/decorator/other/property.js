"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.property = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 17:02:33
 * @LastEditTime: 2021-07-10 17:06:37
 * @FilePath: /reactts/src/decorator/other/property.ts
 * @Description: property
 */
const index_1 = require("../../utils/index");
function property(name, value) {
    return (target) => {
        index_1.validatorsClass(target, "property");
        Object.defineProperty(target.prototype, name, {
            value,
        });
    };
}
exports.property = property;
