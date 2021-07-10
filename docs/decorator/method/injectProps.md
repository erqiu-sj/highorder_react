<!--
 * @Author: 邱狮杰
 * @Date: 2021-07-10 17:55:07
 * @LastEditTime: 2021-07-10 18:50:07
 * @FilePath: /reactts/src/docs/decorator/method/injectProps.md
 * @Description: injectProps
-->

# injectProps

> It allows you to get `props` in the first parameter of your function. If you want to get `state` in the second parameter, it's very easy

> 他可以让你在你的函数第一个参数获取到 `props`，如果你想在第二个参数获取 `state`，也是易如反掌

```typescript
interface State {
  foo: string;
}
interface Props {
  age: number;
}
class App extends Component<Props, State> {
  // The bool determines whether you can get the state in the second parameter
  // 该bool决定了你能否在第二个参数获取到state
  @injectProps(true)
  // It is important to note that parameters need to be defined as optional to escape the type checking at call time
  // 需要注意的是需要将参数定义为可选才能逃过在调用时的类型检查
  mergePropsAndState(props?: Props, state?: State) {
    return props.age + state.foo;
  }
  render() {
    return <h1>{this.mergePropsAndState()}</h1>;
  }
}
```
