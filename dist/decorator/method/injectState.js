"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 14:47:35
 * @LastEditTime: 2021-07-10 15:33:33
 * @FilePath: /reactts/src/decorator/method/injectState.tsx
 * @Description: injectState
 */
const inject_1 = require("./inject");
function injectState(rest) {
    return inject_1.inject("state", rest);
}
exports.default = injectState;
