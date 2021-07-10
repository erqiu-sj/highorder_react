/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 12:53:15
 * @LastEditTime: 2021-07-10 13:40:11
 * @FilePath: /reactts/src/decorator/class/defaultProps.tsx
 * @Description: defaultProps
 */
import { validatorsClass } from "../../utils/index";
/**
 * @description defaultProps
 * @param { T extends Object } props
 * @returns { ( target: Function ) => void }
 */
export function defaultProps<T extends Object>(
  props: T
): (target: Function) => void {
  return (target: Function) => {
    validatorsClass(target, "defaultProps");
    // @ts-ignore
    target.defaultProps = props;
  };
}
