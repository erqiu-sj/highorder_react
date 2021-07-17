<!--
 * @Author: 邱狮杰
 * @Date: 2021-07-17 23:57:40
 * @LastEditTime: 2021-07-18 00:01:27
 * @FilePath: /highorder_react/docs/decorator/class/hoc.md
 * @Description: hoc
-->

# hoc

> You can include your higher-order components with your parameters

> 你可以将你的高阶组件让入其中，并带上你的参数

```tsx
@hoc(highOrderComponent, ...params)
class App extends Component {
  render() {
    return <h1></h1>;
  }
}
// equivalence highOrderComponent(App,...params)

// 等价 highOrderComponent(App,...params)
```
