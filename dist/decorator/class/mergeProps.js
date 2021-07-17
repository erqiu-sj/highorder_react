"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeProps = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 12:11:56
 * @LastEditTime: 2021-07-18 00:46:21
 * @FilePath: /highorder_react/src/decorator/class/mergeProps.tsx
 * @Description: mergeProps
 */
const index_1 = require("../../utils/index");
function mergeProps(cb) {
    return (Target) => {
        index_1.validatorsClass(Target, "mergeProps");
        // @ts-ignore
        return (props) => React.createElement(Target, Object.assign({}, cb(props)));
    };
}
exports.mergeProps = mergeProps;
