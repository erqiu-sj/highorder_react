/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 12:51:56
 * @LastEditTime: 2021-07-29 22:33:39
 * @FilePath: /highorder_react/src/decorator/index.ts
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
import { hoc } from "./class/hoc";
import {
  componentDidMount,
  componentDidUpdate,
  componentDidMountLikeEffect,
} from "./lifeCycle";
import { defaultAction, createAction } from "../redux/action/action";
import { CreateReducer } from "../redux/reducer/createReducer";
export {
  defaultAction,
  createAction,
  CreateReducer,
  componentDidMountLikeEffect,
  componentDidUpdate,
  componentDidMount,
  property,
  initialState,
  mergeProps,
  defaultProps,
  hoc,
  computedProps,
  renderComponent,
  bindThis,
  injectState,
  injectProps,
  lock,
};
