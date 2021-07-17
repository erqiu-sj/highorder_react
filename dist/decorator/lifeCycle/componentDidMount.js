"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentDidMount = void 0;
const index_1 = require("../../utils/index");
function componentDidMount(value) {
    return (target, key) => {
        index_1.validatorsClass(target, "property");
        Object.defineProperty(target.prototype, "componentDidMount", {
            value: value.bind(null, target.prototype.state),
        });
    };
}
exports.componentDidMount = componentDidMount;
