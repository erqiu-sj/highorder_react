<!--
 * @Author: 邱狮杰
 * @Date: 2021-07-10 18:54:39
 * @LastEditTime: 2021-07-10 19:07:12
 * @FilePath: /reactts/src/docs/decorator/class/initialState.md
 * @Description: initialState
-->

# initialState

> Initialize component `state`

> 初始化组件 `state`

> Note that you need to put this decorator before all `props` related decorators

> 需要注意的是你需要将此装饰器放于所有 `props` 相关的装饰器之前

```tsx
interface State {
  age: number;
}
@defaultProps({
  foo: "foo",
})
@initialState({
  age: 10,
})
class App extends Component<{}, State> {
  componentDidMount() {
    const { age } = this.state;
    console.log(age); // 10
  }
}
```
