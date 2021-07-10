/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 14:47:35
 * @LastEditTime: 2021-07-10 15:33:33
 * @FilePath: /reactts/src/decorator/method/injectState.tsx
 * @Description: injectState
 */
import { inject } from "./inject";
export default function injectState(rest: boolean) {
  return inject("state", rest);
}
