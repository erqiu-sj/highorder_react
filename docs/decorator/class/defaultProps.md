<!--
 * @Author: 邱狮杰
 * @Date: 2021-07-10 18:51:09
 * @LastEditTime: 2021-07-10 18:54:15
 * @FilePath: /reactts/src/docs/decorator/class/defaultProps.md
 * @Description: defaultProps
-->

# defaultProps

> Default value of props

> props 的默认值

```tsx
interface Props {
  foo: string;
}
@defaultProps({
  foo: "foo",
})
class App extends Component<Props> {
  render() {
    const { foo } = this.props;
    return <h1>{foo}</h1>;
  }
}
```
