/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 13:40:27
 * @LastEditTime: 2021-07-11 16:32:53
 * @FilePath: /reactts/src/decorator/class/computedProps.tsx
 * @Description: computedProps
 */
import React from "react";
import { validatorsClass } from "../../utils/index";
interface computedPropsTypes<T> {
  [key: string]: (props: T) => any;
}
/**
 * @description computedProps
 * @param { computedPropsTypes<T> } configs key通过value的返回值注入进props里
 * @returns { Function }
 */
export function computedProps<P>(configs: computedPropsTypes<P>): Function {
  return (Target: Function) => {
    validatorsClass(Target, "computedProps");
    return (props: P) => {
      const nextProps = Object.assign({}, props);
      Object.keys(configs).forEach((propsName: string) => {
        Reflect.set(nextProps, propsName, configs[propsName](props));
      });
      return <Target {...nextProps} />;
    };
  };
}
