/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 17:02:33
 * @LastEditTime: 2021-07-10 17:06:37
 * @FilePath: /reactts/src/decorator/other/property.ts
 * @Description: property
 */
import { validatorsClass } from "../../utils/index";
export function property<T>(name: string, value: T) {
  return (target: Function) => {
    validatorsClass(target, "property");
    Object.defineProperty(target.prototype, name, {
      value,
    });
  };
}
