/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 12:11:56
 * @LastEditTime: 2021-07-10 12:58:53
 * @FilePath: /reactts/src/decorator/class/mergeProps.tsx
 * @Description: mergeProps
 */
import { ComponentType } from "react";
import { validatorsClass } from "../../utils/index";

/**
 * @description mergeProps
 * @param { mergePropsCb<T> } cb 通过函数返回值的方式返回一个新的props而不是修改原来的props
 * @callback cb
 */
type mergePropsCb<T> = (props: T) => T;
export function mergeProps<T extends Object>(cb: mergePropsCb<T>): Function {
  return (Target: ComponentType<T>) => {
    validatorsClass(Target, "mergeProps");
    return (props: T) => <Target {...cb(props)} />;
  };
}
