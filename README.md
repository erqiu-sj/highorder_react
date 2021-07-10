<!--
 * @Author: 邱狮杰
 * @Date: 2021-07-09 23:57:06
 * @LastEditTime: 2021-07-10 19:51:41
 * @FilePath: /reactts/README.md
 * @Description: 描述
-->

# Developing react with AOP

# install

`yarn add highorder_react`

or

`npm i --save-dev highorder_react`

```tsx
import {
  componentDidMount,
  initialState,
  computedProps,
  injectState,
  defaultProps
} from "highorder_react";

interface ownState {
  age: number;
}

interface ownProps {
  height: number;
  long: number;
  total?: number
}

@componentDidMount(({ age }) => {
  console.log(age);
})
@computedProps({ total: ({ height, long }) => height + long })
@defaultProps({
  height:10,
  long:10
})
@initialState({
  age: 1,
})
class App extends Component<ownProps, ownState> {

  @injectState(true);
  showTime(state?: ownState,props?: ownProps) {
    return state.age + props.total
  }

  render() {
    return <h1>wow!{this.showTime()}</h1>; // wow! 21
  }
}
```

[dosc]('./docs.md')
