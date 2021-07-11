/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 17:38:33
 * @LastEditTime: 2021-07-10 17:40:18
 * @FilePath: /reactts/src/decorator/lifeCycle/componentDidUpdate.ts
 * @Description: componentDidUpdate
 */
import { property } from "../index";
export function componentDidUpdate(cb: Function) {
  return property("componentDidUpdate", cb);
}
