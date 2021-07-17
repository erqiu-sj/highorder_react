/*
 * @Author: 邱狮杰
 * @Date: 2021-07-17 10:44:28
 * @LastEditTime: 2021-07-17 10:44:38
 * @FilePath: /highorder_react/src/decorator/class/hoc.tsx
 * @Description: hoc
 */

export function hoc<T>(containerComponent: Function, ...params: T[]) {
  return (target: Function) => {
    return params.length === 0
      ? containerComponent(target)
      : containerComponent(target, ...params);
  };
}
