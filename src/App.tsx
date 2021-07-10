/*
 * @Author: 邱狮杰
 * @Date: 2021-07-09 23:57:06
 * @LastEditTime: 2021-07-10 19:26:32
 * @FilePath: /reactts/src/App.tsx
 * @Description: 描述
 */
import { Component } from "react";
import { componentDidMount, initialState } from "./decorator";

interface State {
  age: number;
}
interface Props {}
@componentDidMount<State>(({ age }) => {
  console.log(age);
})
@initialState({
  age: 1,
})
class App extends Component<Props, State> {
  render() {
    return <h1>1</h1>;
  }
}
export default App;
