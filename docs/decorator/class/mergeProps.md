<!--
 * @Author: 邱狮杰
 * @Date: 2021-07-10 18:59:06
 * @LastEditTime: 2021-07-10 19:04:36
 * @FilePath: /reactts/src/docs/decorator/class/mergeProps.md
 * @Description: mergeProps
-->

# mergeProps

> Pass in a props as the parameter of the callback function, and return a new props

> 传入一个 props 作为回调函数的参数，并且返回一个新的 props

```tsx
interface Props {
  age: number;
}

@mergeProps<Props>((props) => {
  const nextProps = Object.assign({}, props);
  nextProps.age += 1;
  return nextProps;
})
@defaultProps({
  age: 10,
})
class App extends Component<Props> {
  render() {
    const { age } = this.props;
    return <h1>{age}</h1>; // age === 11
  }
}
```
