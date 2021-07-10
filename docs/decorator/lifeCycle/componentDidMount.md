<!--
 * @Author: 邱狮杰
 * @Date: 2021-07-10 18:40:11
 * @LastEditTime: 2021-07-10 19:29:48
 * @FilePath: /reactts/docs/decorator/lifeCycle/componentDidMount.md
 * @Description: componentDidMount
-->

# componentDidMount

> execute after the component mount is completed,Now you can also get the `state` in `componentdidmount`, which is not provided by `react`

> 在组件挂载完成后执行,你现在也可以在 `componentDidMount` 中获取 `state` 了，这是 `react` 没有提供的

```typescript
interface State {
  age: number;
}
@componentDidMount(({ age }) => {
  console.log("componentDidMount", age);
})
class App extends Component<Props, State> {
  // componentDidMount() {}
}
```
