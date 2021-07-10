<!--
 * @Author: 邱狮杰
 * @Date: 2021-07-10 18:45:43
 * @LastEditTime: 2021-07-10 18:49:00
 * @FilePath: /reactts/src/docs/decorator/class/renderComponent.md
 * @Description: renderComponent
-->

# renderComponent

> Render the incoming component as the render

> 将传入的组件作为本次的 `render` 渲染

```tsx
interface Props {
  age: number;
}
function Test({ age }) {
  return <h1>{age}</h1>;
}
@renderComponent(Test)
class App extends Component<Props> {}
```
