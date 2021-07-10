<!--
 * @Author: 邱狮杰
 * @Date: 2021-07-10 17:49:19
 * @LastEditTime: 2021-07-10 18:49:34
 * @FilePath: /reactts/src/docs/decorator/method/bindThis.md
 * @Description: bindThis
-->

# bindThis

> auto bind `this`

> 自动绑定 `this`

```typescript
class App extends Component {
  @bindThis
  clickHandler() {}

  render() {
    return <h1 onClick={this.clickHandler}>click me</h1>;
  }
}
```
