<!--
 * @Author: 邱狮杰
 * @Date: 2021-07-10 19:08:01
 * @LastEditTime: 2021-07-10 19:13:40
 * @FilePath: /reactts/src/docs/decorator/class/computedProps.md
 * @Description: computedProps
-->

# computedProps

> Calculate `props` and add the value to `props`

> 计算 `props`，并将值添加到 `props` 中

```tsx
interface Props {
  height: number;
  age: number;
  computedTotal?: number;
}

@computedProps<Props>({
  computedTotal: ({ height, age }) => height + age,
})
@defaultProps({ height: 10, age: 18 })
class App extends Component<Props> {
  render() {
    return <h1>{this.props.computedTotal}</h1>; // 18
  }
}
```
