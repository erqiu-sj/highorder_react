# Developing react with AOP

# install

`yarn add high-order-react`

or

`npm i --save-dev high-order-react`

```tsx
import {
  componentDidMount,
  initialState,
  computedProps,
  injectState,
  defaultProps
} from "high-order-react";

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

[docs](/docs.md)
