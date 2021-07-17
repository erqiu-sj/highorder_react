"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inject = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 14:38:37
 * @LastEditTime: 2021-07-10 15:36:07
 * @FilePath: /reactts/src/decorator/method/inject.tsx
 * @Description: inject core
 */
const index_1 = require("../../utils/index");
function inject(value, rest) {
    return (target, key, desc) => {
        const useFn = desc.value;
        const restVal = rest ? negativeValue(value) : false;
        index_1.validatorsFn(useFn, `inject${value.charAt(0).toUpperCase()}${value.slice(1)}`);
        desc.value = function () {
            // @ts-ignore
            return useFn === null || useFn === void 0 ? void 0 : useFn.call(this, this[value], restVal && this[restVal]);
        };
    };
}
exports.inject = inject;
function negativeValue(val) {
    if (val === "state")
        return "props";
    return "state";
}
