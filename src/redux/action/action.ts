/*
 * @Author: 邱狮杰
 * @Date: 2021-07-29 20:49:13
 * @LastEditTime: 2021-07-29 22:32:07
 * @FilePath: /highorder_react/src/redux/action/action.ts
 * @Description: 描述
 */
import { Action } from "./types";

export function defaultAction<T extends object>(
  action: Action["type"],
  params?: T
): (Action & T) | Action {
  return {
    type: action,
    ...params,
  };
}

export function createAction<T extends object>(
  action: Action["type"],
  fn: (
    actionFn: (action: Action["type"], params?: T) => (Action & T) | Action
  ) => (action: Action["type"]) => (Action & T) | Action
) {
  return fn(defaultAction)(action);
}
