<!--
 * @Author: 邱狮杰
 * @Date: 2021-07-10 17:55:07
 * @LastEditTime: 2021-07-10 18:50:39
 * @FilePath: /reactts/src/docs/decorator/method/injectState.md
 * @Description: injectState
-->

# injectState

> It allows you to get `state` in the first parameter of your function. If you want to get `props` in the second parameter, it's very easy

> 他可以让你在你的函数第一个参数获取到 `state`，如果你想在第二个参数获取 `props`，也是易如反掌

```typescript
interface State {
  foo: string;
}
interface Props {
  age: number;
}
class App extends Component<Props, State> {
  // The bool determines whether you can get the props in the second parameter
  // 该bool决定了你能否在第二个参数获取到props
  @injectState(true)
  // It is important to note that parameters need to be defined as optional to escape the type checking at call time
  // 需要注意的是需要将参数定义为可选才能逃过在调用时的类型检查
  mergePropsAndState(state?: State, props?: Props) {
    return props.age + state.foo;
  }
  render() {
    return <h1>{this.mergePropsAndState()}</h1>;
  }
}
```
