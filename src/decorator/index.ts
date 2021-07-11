/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 12:51:56
 * @LastEditTime: 2021-07-11 16:52:20
 * @FilePath: /reactts/src/decorator/index.ts
 * @Description: entry
 */
import { initialState } from "./class/initialState";
import { mergeProps } from "./class/mergeProps";
import { defaultProps } from "./class/defaultProps";
import { computedProps } from "./class/computedProps";
import { renderComponent } from "./class/renderComponent";
import bindThis from "./method/bindThis";
import injectState from "./method/injectState";
import injectProps from "./method/injectProps";
import { lock } from "./method/lock";
import { property } from "./other/index";
import { componentDidMount, componentDidUpdate } from "./lifeCycle";
export {
  componentDidUpdate,
  componentDidMount,
  property,
  initialState,
  mergeProps,
  defaultProps,
  computedProps,
  renderComponent,
  bindThis,
  injectState,
  injectProps,
  lock,
};
