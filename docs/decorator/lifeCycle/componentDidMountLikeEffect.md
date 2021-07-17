<!--
 * @Author: 邱狮杰
 * @Date: 2021-07-18 00:02:05
 * @LastEditTime: 2021-07-18 00:07:29
 * @FilePath: /highorder_react/docs/decorator/lifeCycle/componentDidMountLikeEffect.md
 * @Description: componentDidMountLikeEffect
-->

# componentDidMountLikeEffect

> Divide the logic in `componentdiemount`, just like `effect`, and process each piece of logic separately

> 将 `componentDieMount` 中的逻辑分割就像 `effect` 一样，对每段逻辑单独处理

```tsx
interface State {
  one: number
}
@componentDidMountLikeEffect([
  (state,props)=>{
    console.log(state.one) // 1
  },
  async ()=>{
    const result = await new Promise(resolve=>resolve(1))
    console.log('wow',result) // wow  1
  }]);
class App extends Component<{},State> {
 state: State = {
   number: 1
 }
  render(){
    const { one } = this.state
    return <h1>{ one }</h1>
  }
}
```
