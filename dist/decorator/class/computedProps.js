"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computedProps = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 13:40:27
 * @LastEditTime: 2021-07-18 00:46:28
 * @FilePath: /highorder_react/src/decorator/class/computedProps.tsx
 * @Description: computedProps
 */
const index_1 = require("../../utils/index");
/**
 * @description computedProps
 * @param { computedPropsTypes<T> } configs key通过value的返回值注入进props里
 * @returns { Function }
 */
function computedProps(configs) {
    return (Target) => {
        index_1.validatorsClass(Target, "computedProps");
        return (props) => {
            const nextProps = Object.assign({}, props);
            Object.keys(configs).forEach((propsName) => {
                Reflect.set(nextProps, propsName, configs[propsName](props));
            });
            // @ts-ignore
            return React.createElement(Target, Object.assign({}, nextProps));
        };
    };
}
exports.computedProps = computedProps;
