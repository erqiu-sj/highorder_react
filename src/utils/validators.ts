/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 11:14:44
 * @LastEditTime: 2021-07-10 14:38:02
 * @FilePath: /reactts/src/utils/validators.ts
 * @Description:  validators
 */
export function validatorsClass(clazz: unknown, decorator: string) {
  if (typeof clazz !== "function") {
    throw new Error(
      `@${decorator} decorator can only be applied to class not: ${typeof clazz}`
    );
  }
}
export function validatorsFn(fn: unknown, decorator: string) {
  if (typeof fn !== "function") {
    throw new Error(
      `@${decorator} decorator can only be applied to method not: ${typeof fn}`
    );
  }
}
