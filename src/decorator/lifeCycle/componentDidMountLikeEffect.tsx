/*
 * @Author: 邱狮杰
 * @Date: 2021-07-16 23:26:42
 * @LastEditTime: 2021-07-16 23:29:38
 * @FilePath: /highorder_react/src/decorator/lifeCycle/componentDidMountLikeEffect.tsx
 * @Description: componentDidMountLikeEffect
 */

export function componentDidMountLikeEffect<S, P>(
  fn: ((state: S, props: P) => void)[]
) {
  return (target: Function) => {
    const generatingFunction = function (state: S, props: P) {
      fn.forEach(async (fnItem) => await fnItem(state, props));
    };
    Object.defineProperty(target.prototype, "componentDidMount", {
      value: generatingFunction.bind(
        null,
        target.prototype.state,
        target.prototype.props
      ),
    });
  };
}
