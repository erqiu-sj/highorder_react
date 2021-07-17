"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentDidUpdate = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 17:38:33
 * @LastEditTime: 2021-07-10 17:40:18
 * @FilePath: /reactts/src/decorator/lifeCycle/componentDidUpdate.ts
 * @Description: componentDidUpdate
 */
const index_1 = require("../index");
function componentDidUpdate(cb) {
    return index_1.property("componentDidUpdate", cb);
}
exports.componentDidUpdate = componentDidUpdate;
