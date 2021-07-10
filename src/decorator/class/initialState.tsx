/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 11:41:36
 * @LastEditTime: 2021-07-10 12:59:15
 * @FilePath: /reactts/src/decorator/class/initialState.tsx
 * @Description: initialState
 */
import { validatorsClass } from "../../utils/index";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { mergeProps } from "./mergeProps";
/**
 * @description create state
 * @param { T } state
 * @returns { ( target: Function ) => void }
 * 需要注意的是该装饰器应该放在mregeProps之前 {@link mergeProps}
 */
export function initialState<T extends Object>(
  state: T
): (targe: Function) => void {
  return (target: Function) => {
    validatorsClass(target, "component");
    target.prototype.state = state;
  };
}
