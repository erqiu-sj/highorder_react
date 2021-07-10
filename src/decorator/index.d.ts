/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 19:59:10
 * @LastEditTime: 2021-07-10 20:05:38
 * @FilePath: /reactts/src/decorator/index.d.ts
 * @Description:
 */

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
