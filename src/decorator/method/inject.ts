/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 14:38:37
 * @LastEditTime: 2021-07-10 15:36:07
 * @FilePath: /reactts/src/decorator/method/inject.tsx
 * @Description: inject core
 */
import { validatorsFn } from "../../utils/index";
export function inject(value: "state" | "props", rest?: boolean): Function {
  return (
    target: Function,
    key: string,
    desc: TypedPropertyDescriptor<Function>
  ) => {
    const useFn = desc.value;
    const restVal = rest ? negativeValue(value) : false;
    validatorsFn(
      useFn,
      `inject${value.charAt(0).toUpperCase()}${value.slice(1)}`
    );
    desc.value = function (): Function {
      // @ts-ignore
      return useFn?.call(this, this[value], restVal && this[restVal]);
    };
  };
}
function negativeValue(val: "state" | "props"): "state" | "props" {
  if (val === "state") return "props";
  return "state";
}
