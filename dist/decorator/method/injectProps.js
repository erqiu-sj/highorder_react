"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 15:14:57
 * @LastEditTime: 2021-07-10 15:29:37
 * @FilePath: /reactts/src/decorator/method/injectProps.tsx
 * @Description: injectProps
 */
const inject_1 = require("./inject");
function injectProps(rest) {
    return inject_1.inject("props", rest);
}
exports.default = injectProps;
