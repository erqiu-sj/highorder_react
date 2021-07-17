"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultProps = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 12:53:15
 * @LastEditTime: 2021-07-10 13:40:11
 * @FilePath: /reactts/src/decorator/class/defaultProps.tsx
 * @Description: defaultProps
 */
const index_1 = require("../../utils/index");
/**
 * @description defaultProps
 * @param { T extends Object } props
 * @returns { ( target: Function ) => void }
 */
function defaultProps(props) {
    return (target) => {
        index_1.validatorsClass(target, "defaultProps");
        // @ts-ignore
        target.defaultProps = props;
    };
}
exports.defaultProps = defaultProps;
