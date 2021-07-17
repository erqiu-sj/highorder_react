/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 14:04:21
 * @LastEditTime: 2021-07-18 00:46:37
 * @FilePath: /highorder_react/src/decorator/class/renderComponent.tsx
 * @Description: renderComponent
 */
import { validatorsClass } from "../../utils/index";
/**
 * @description renderComponent
 * @param { Function } Component 被render的组件
 * @returns { Function }
 */
export function renderComponent(Component: Function): Function {
  return (target: Function) => {
    validatorsClass(target, "renderComponent");
    target.prototype.render = function render() {
      // @ts-ignore
      return <Component {...this.props} />;
    };
  };
}
