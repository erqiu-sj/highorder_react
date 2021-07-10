/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 15:45:22
 * @LastEditTime: 2021-07-10 16:21:14
 * @FilePath: /reactts/src/decorator/method/lock.tsx
 * @Description: lock
 */
import "reflect-metadata";
import { validatorsFn } from "../../utils/index";
export function lock(executionTimes: number = 1): Function {
  return (
    target: Function,
    key: string,
    desc: TypedPropertyDescriptor<Function>
  ) => {
    let useFn: undefined | Function = desc.value;
    validatorsFn(useFn, "lock");
    desc.value = function (...params: unknown[]) {
      let remainingTimes = Reflect.getMetadata(key, target);
      if (!remainingTimes && remainingTimes !== 0) {
        Reflect.defineMetadata(key, executionTimes, target);
        remainingTimes = Reflect.getMetadata(key, target);
      }
      if (remainingTimes < 1) {
        useFn = undefined;
        Reflect.defineMetadata(key, 0, target);
        return;
      }
      useFn?.call(this, ...params);
      Reflect.defineMetadata(key, remainingTimes - 1, target);
    };
  };
}
