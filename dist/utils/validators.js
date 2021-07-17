"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorsFn = exports.validatorsClass = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 11:14:44
 * @LastEditTime: 2021-07-10 14:38:02
 * @FilePath: /reactts/src/utils/validators.ts
 * @Description:  validators
 */
function validatorsClass(clazz, decorator) {
    if (typeof clazz !== "function") {
        throw new Error(`@${decorator} decorator can only be applied to class not: ${typeof clazz}`);
    }
}
exports.validatorsClass = validatorsClass;
function validatorsFn(fn, decorator) {
    if (typeof fn !== "function") {
        throw new Error(`@${decorator} decorator can only be applied to method not: ${typeof fn}`);
    }
}
exports.validatorsFn = validatorsFn;
