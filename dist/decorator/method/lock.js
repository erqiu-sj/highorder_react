"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lock = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 15:45:22
 * @LastEditTime: 2021-07-10 16:21:14
 * @FilePath: /reactts/src/decorator/method/lock.tsx
 * @Description: lock
 */
require("reflect-metadata");
const index_1 = require("../../utils/index");
function lock(executionTimes = 1) {
    return (target, key, desc) => {
        let useFn = desc.value;
        index_1.validatorsFn(useFn, "lock");
        desc.value = function (...params) {
            let remainingTimes = Reflect.getMetadata(key, target);
            if (!remainingTimes && remainingTimes !== 0) {
                Reflect.defineMetadata(key, executionTimes, target);
                remainingTimes = Reflect.getMetadata(key, target);
            }
            if (remainingTimes < 1) {
                useFn = undefined;
                Reflect.defineMetadata(key, 0, target);
                return;
            }
            useFn === null || useFn === void 0 ? void 0 : useFn.call(this, ...params);
            Reflect.defineMetadata(key, remainingTimes - 1, target);
        };
    };
}
exports.lock = lock;
