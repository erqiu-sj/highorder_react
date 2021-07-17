"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-17 10:44:28
 * @LastEditTime: 2021-07-17 10:44:38
 * @FilePath: /highorder_react/src/decorator/class/hoc.tsx
 * @Description: hoc
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoc = void 0;
function hoc(containerComponent, ...params) {
    return (target) => {
        return params.length === 0
            ? containerComponent(target)
            : containerComponent(target, ...params);
    };
}
exports.hoc = hoc;
