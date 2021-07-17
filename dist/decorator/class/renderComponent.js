"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderComponent = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 14:04:21
 * @LastEditTime: 2021-07-18 00:46:37
 * @FilePath: /highorder_react/src/decorator/class/renderComponent.tsx
 * @Description: renderComponent
 */
const index_1 = require("../../utils/index");
/**
 * @description renderComponent
 * @param { Function } Component 被render的组件
 * @returns { Function }
 */
function renderComponent(Component) {
    return (target) => {
        index_1.validatorsClass(target, "renderComponent");
        target.prototype.render = function render() {
            // @ts-ignore
            return React.createElement(Component, Object.assign({}, this.props));
        };
    };
}
exports.renderComponent = renderComponent;
