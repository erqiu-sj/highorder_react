/*
 * @Author: 邱狮杰
 * @Date: 2021-07-29 21:02:30
 * @LastEditTime: 2021-07-29 22:36:09
 * @FilePath: /highorder_react/src/redux/reducer/createReducer.ts
 * @Description: createReducer
 */
import { Action } from "../action/types";

export class CreateReducer<S, A> {
  #reducerObj: object;
  #state: S;
  constructor(state: S) {
    this.#state = state;
    this.#reducerObj = {};
  }
  addAction(
    action: Action["type"],
    handler: (state: S, action: Action & A) => S
  ): this {
    if (Reflect.has(this.#reducerObj, action))
      throw new Error("The action exists");
    Reflect.set(this.#reducerObj, action, handler);
    return this;
  }
  finish(): (State: S | undefined, action: Action & A) => S {
    return (State: S = this.#state, action: Action & A): S => {
      return Reflect.get(this.#reducerObj, action.type).call(
        null,
        State,
        action
      );
    };
  }
}
