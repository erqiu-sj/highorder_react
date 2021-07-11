import { validatorsClass } from "../../utils/index";
export function componentDidMount<T>(value: (state: T) => void): Function {
  return (target: Function, key: string) => {
    validatorsClass(target, "property");
    Object.defineProperty(target.prototype, "componentDidMount", {
      value: value.bind(null, target.prototype.state),
    });
  };
}
