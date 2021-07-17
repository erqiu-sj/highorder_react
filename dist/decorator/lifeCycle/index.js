"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentDidMountLikeEffect = exports.componentDidUpdate = exports.componentDidMount = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 17:08:25
 * @LastEditTime: 2021-07-18 00:39:58
 * @FilePath: /highorder_react/src/decorator/lifeCycle/index.ts
 * @Description: entry
 */
const componentDidMount_1 = require("./componentDidMount");
Object.defineProperty(exports, "componentDidMount", { enumerable: true, get: function () { return componentDidMount_1.componentDidMount; } });
const componentDidUpdate_1 = require("./componentDidUpdate");
Object.defineProperty(exports, "componentDidUpdate", { enumerable: true, get: function () { return componentDidUpdate_1.componentDidUpdate; } });
const componentDidMountLikeEffect_1 = require("./componentDidMountLikeEffect");
Object.defineProperty(exports, "componentDidMountLikeEffect", { enumerable: true, get: function () { return componentDidMountLikeEffect_1.componentDidMountLikeEffect; } });
