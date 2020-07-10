# React

## 组件

### createClass(原始方式)

```js
var React = require("react");

var Hello = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
  },
  getDefaultProps: function() {
    return { name: "yan" };
  },
  getInitialState: function() {
    return { count: 1 };
  },
  render: function() {
    return (
      <div>
        hell{this.props.name} {this.state.count}
      </div>
    );
  },
});

var ReactDOM = require("react-dom");

ReactDOM.render(<Hello />, document.getElementById("root"));
```

### Component

```js
import React from "react";

class Hello extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };
  static defaultProps = {
    name: "yan",
  };
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  render() {
    return (
      <div>
        hello{this.props.name} {this.state.count}
      </div>
    );
  }
}
```

### Functional Component(纯展示类组件)

```js
import React from "react";

function Hello({ name }) {
  return <div>{name}</div>;
}
Hello.propTypes = {
  name: React.PropTypes.string,
};
Hello.defaultProps = {
  name: "yan",
};
```

### PureComponent(仅比较直接属性，浅比较)

```js
class Demo2 extends PureComponent {}
```

## 组件与系统

- 传统系统：公共的 HTML 片段不能复用，html 没有提供引入 HTML 片段的功能。
- react 系统：组件复用变得容易

## JSX

```js
//createElement写法
React.createElement(
  "div",
  { className: "container" },
  React.createElement(Age, { num: "1" }, "th"),
  "Hello",
  this.props.name
);
```

```js
//jsx写法
<div className="container">
  <Age num="1">th</Age>
  Hello{this.props.name}
</div>
```

## 生命周期
```js
class Foo extends React.Component{
  constructor(props){
    super(props);
    this.state={msg:"123"}
    console.log("foo--初始化")
  }
  componentWillMount(){
    console.log("foo--将要挂载")
    setTimeout(()=>{
      this.setState({msg:"456 "})
    },1000)
  }
  componentWillReceiveProps(){
    console.log("foo--Props")
  }
  shouldComponentUpdate(){
    console.log("foo-- shouldUpdate")
    return true;
  }
  componentWillUpdate(){
    console.log("foo-- willUpdate")
  }
  render(){
    console.log("foo--渲染")
    return (<div>
        <div>
          <Sub msg={this.state.msg}/>
        </div>
        aaa
      </div>)
  }
  componentDidUpdate(){
    console.log("foo--didUpdate")
  }
  componentDidMount(){
    console.log("foo--挂载完毕")
  }
}

class Sub extends React.Component{
  constructor(props){
    super(props);
    console.log("sub--初始化")
  }
  componentWillMount(){
    console.log("sub--将要挂载")
  }
  componentWillReceiveProps(){
    console.log("sub--Props")
  }
  shouldComponentUpdate(){
    console.log("sub-- shouldUpdate");
    return true;
  }
   componentWillUpdate(){
    console.log("sub-- willUpdate")
  }
  render(){
    console.log("sub--渲染")
    return (<div>{this.props.msg}</div>)
  }
  componentDidUpdate(){
    console.log("sub--didUpdate")
  }
  componentDidMount(){
    console.log("sub--挂载完毕 ")
  }
}

ReactDOM.render(
  <Foo/>,
  document.getElementById('root')
);
```
## 组件属性和状态

### 属性(组件的输入)
```js
//例子
<User name="yan" age="18">

//函数式组件
function User(props){
  return <div>{props.name}</div>
}

//class组件
class User extends Component{
  render(){
    retrun <div>{this.props.name}</div>
  }
}
```
**ps:** 属性是只读的，不能进行修改