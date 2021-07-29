/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 19:59:10
 * @LastEditTime: 2021-07-29 22:37:27
 * @FilePath: /highorder_react/src/decorator/index.d.ts
 * @Description:
 */
import { Action } from "../redux/action/types";
export declare function initialState<T extends Object>(
  state: T
): (targe: Function) => void;

declare type mergePropsCb<T> = (props: T) => T;
export declare function mergeProps<T extends Object>(
  cb: mergePropsCb<T>
): Function;

export declare function defaultProps<T extends Object>(
  props: T
): (target: Function) => void;

declare interface computedPropsTypes<T> {
  [key: string]: (props: T) => any;
}
export declare function computedProps<P>(
  configs: computedPropsTypes<P>
): Function;

export declare function renderComponent(Component: Function): Function;

export declare const bindThis: ClassDecorator & MethodDecorator;

export declare function injectState(rest: boolean): Function;

export declare function injectProps(rest: boolean): Function;

export declare function property<T>(
  name: string,
  value: T
): (target: Function) => void;

export declare function componentDidMount<T>(
  value: (state: T) => void
): Function;

export declare function componentDidUpdate(
  cb: Function
): (target: Function) => void;

export declare function hoc<T>(
  containerComponent: Function,
  ...params: T[]
): (target: Function) => any;

export declare function componentDidMountLikeEffect<S, P>(
  fn: ((state: S, props: P) => void)[]
): (target: Function) => void;
export declare function defaultAction<T extends object>(
  action: Action["type"],
  params?: T | undefined
): (Action & T) | Action;

export declare function createAction<T extends object>(
  action: Action["type"],
  fn: (
    actionFn: (
      action: Action["type"],
      params?: T | undefined
    ) => (Action & T) | Action
  ) => (action: Action["type"]) => (Action & T) | Action
): Action | (Action & T);
export declare class CreateReducer<S, A> {
  constructor(state: S);

  addAction(
    action: Action["type"],
    handler: (state: S, action: Action & A) => S
  ): this;

  finish(): (State: S | undefined, action: Action & A) => S;
}
