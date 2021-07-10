/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 15:14:57
 * @LastEditTime: 2021-07-10 15:29:37
 * @FilePath: /reactts/src/decorator/method/injectProps.tsx
 * @Description: injectProps
 */
import { inject } from "./inject";
export default function injectProps(rest: boolean) {
  return inject("props", rest);
}
