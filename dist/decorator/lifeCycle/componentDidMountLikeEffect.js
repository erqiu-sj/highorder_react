"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-16 23:26:42
 * @LastEditTime: 2021-07-16 23:29:38
 * @FilePath: /highorder_react/src/decorator/lifeCycle/componentDidMountLikeEffect.tsx
 * @Description: componentDidMountLikeEffect
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentDidMountLikeEffect = void 0;
function componentDidMountLikeEffect(fn) {
    return (target) => {
        const generatingFunction = function (state, props) {
            fn.forEach((fnItem) => __awaiter(this, void 0, void 0, function* () { return yield fnItem(state, props); }));
        };
        Object.defineProperty(target.prototype, "componentDidMount", {
            value: generatingFunction.bind(null, target.prototype.state, target.prototype.props),
        });
    };
}
exports.componentDidMountLikeEffect = componentDidMountLikeEffect;
