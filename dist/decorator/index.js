"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lock = exports.injectProps = exports.injectState = exports.bindThis = exports.renderComponent = exports.computedProps = exports.hoc = exports.defaultProps = exports.mergeProps = exports.initialState = exports.property = exports.componentDidMount = exports.componentDidUpdate = exports.componentDidMountLikeEffect = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 12:51:56
 * @LastEditTime: 2021-07-18 00:40:24
 * @FilePath: /highorder_react/src/decorator/index.ts
 * @Description: entry
 */
const initialState_1 = require("./class/initialState");
Object.defineProperty(exports, "initialState", { enumerable: true, get: function () { return initialState_1.initialState; } });
const mergeProps_1 = require("./class/mergeProps");
Object.defineProperty(exports, "mergeProps", { enumerable: true, get: function () { return mergeProps_1.mergeProps; } });
const defaultProps_1 = require("./class/defaultProps");
Object.defineProperty(exports, "defaultProps", { enumerable: true, get: function () { return defaultProps_1.defaultProps; } });
const computedProps_1 = require("./class/computedProps");
Object.defineProperty(exports, "computedProps", { enumerable: true, get: function () { return computedProps_1.computedProps; } });
const renderComponent_1 = require("./class/renderComponent");
Object.defineProperty(exports, "renderComponent", { enumerable: true, get: function () { return renderComponent_1.renderComponent; } });
const bindThis_1 = __importDefault(require("./method/bindThis"));
exports.bindThis = bindThis_1.default;
const injectState_1 = __importDefault(require("./method/injectState"));
exports.injectState = injectState_1.default;
const injectProps_1 = __importDefault(require("./method/injectProps"));
exports.injectProps = injectProps_1.default;
const lock_1 = require("./method/lock");
Object.defineProperty(exports, "lock", { enumerable: true, get: function () { return lock_1.lock; } });
const index_1 = require("./other/index");
Object.defineProperty(exports, "property", { enumerable: true, get: function () { return index_1.property; } });
const hoc_1 = require("./class/hoc");
Object.defineProperty(exports, "hoc", { enumerable: true, get: function () { return hoc_1.hoc; } });
const lifeCycle_1 = require("./lifeCycle");
Object.defineProperty(exports, "componentDidMount", { enumerable: true, get: function () { return lifeCycle_1.componentDidMount; } });
Object.defineProperty(exports, "componentDidUpdate", { enumerable: true, get: function () { return lifeCycle_1.componentDidUpdate; } });
Object.defineProperty(exports, "componentDidMountLikeEffect", { enumerable: true, get: function () { return lifeCycle_1.componentDidMountLikeEffect; } });
