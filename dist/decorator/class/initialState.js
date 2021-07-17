"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 11:41:36
 * @LastEditTime: 2021-07-10 12:59:15
 * @FilePath: /reactts/src/decorator/class/initialState.tsx
 * @Description: initialState
 */
const index_1 = require("../../utils/index");
/**
 * @description create state
 * @param { T } state
 * @returns { ( target: Function ) => void }
 * 需要注意的是该装饰器应该放在mregeProps之前 {@link mergeProps}
 */
function initialState(state) {
    return (target) => {
        index_1.validatorsClass(target, "component");
        target.prototype.state = state;
    };
}
exports.initialState = initialState;
