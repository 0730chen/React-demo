import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Message from "./message";
import Click from './click'

//生成小块
class Square extends React.Component {
  //类的属性
  //父组件传递值，不需要在子组件上添加数据状态
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     value:null,
  //   }
  // }
  render() {
    return (
      //通过props传递值
      //使用箭头函数避免this问题
      //使用props接受父组件传递的值
      <button
        className="square"
        onClick={() => {
          this.props.onClick();
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

//生成小块+代码
//在父组件中保存9个state ，传递给子组件进行渲染
//此时的Square组件中没有state，当Board组件中的值发生变化后，Square组件会重新渲染一次
//Square组件完全受控于Board组件，此时Square被称作受控组件

//函数组件，如果你的组件不需要state，只包含了一个render方法，那就可以使用函数组件，不用继承React.Component

function Square1(props) {
  console.log("我是函数组件");
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
class Board extends React.Component {
  //renderSquare函数接收一个参数，返回一个Square对象，所以 Board组件是Square的父组件
  // constructor(props){
  //   super(props)
  //   //相当于Vuex中的state仓库，用来存放数据
  //   this.state = {
  //       squares:Array(9).fill(null),
  //       xIsNext:true,//true为先手
  //   }
  // }
  //是为了给子组件传值square
  constructor(props) {
    super(props);
    this.state = {
      HelloWord: "杭州"
    };
  }
  renderSquare(i) {
    //本来传递的是0-9
    // return <Square value={i}/>
    //父组件向子组件传递一个函数，当Square被点击则函数被调用
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => {
          this.props.onClick(i);
        }}
      />
    );
  }
  //定义传递给子组件的函数，当点击Square时，函数触发
  handleClick(i) {
    console.log(`我是第${i}个元素块`);
    const squares = this.state.squares.slice();
    //数据修改的两种方式 1.直接修改原数据 ，2.使用新数据替换原数据，原数据不会变化
    //在React中，我们使用新数据替换原数据的方式，直接方便我们跟踪数据
    if (calculateWinner(squares) || squares[i]) {
      //判断获胜后直接返回
      return;
    } //创建了一个复制，而不是直接修改原型
    squares[i] = this.state.xIsNext ? "x" : "o"; //xIsNext决定先手后手
    //设置点击元素块的值，点击后 null=> 'x'
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }

  render() {
    console.log(this);
    // const status = 'what react:'+(this.state.xIsNext?'x':'o')
    // const winner = calculateWinner(this.state.squares)//定义了获胜条件
    // let status
    // if(winner){
    //   status = 'Winner'+winner
    // }else{
    //   status = 'Next Play'+(this.state.xIsNext? 'X':'O')
    // }

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

//此时，Bordr组件是Game组件的子组件
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true,
      stepNumber: 0,
      HelloWord: ["杭州", "北京", "陕西", "山西"],
      id: "1"
    };
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }
  handleSubmitAPP =(e)=>{
    // console.log(e)
  }
  renderHello(arr) {
    this.setState = {};
    //父组件将自定义函数当做回调函数传给子组件，当子组件触发后，调用这个函数
    return <HelloWord value={this.state.HelloWord} id={this.state.id + 1} onSubmit = {()=>{this.handleSubmitAPP()}}/>;
  }
  handleClick(i) {
    console.log(`我是第${i}个元素块`);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const move = history.map((step, move) => {
      const desc = move ? "Go to move #" : "Go to game start";
      return (
        <li>
          <button
            onClick={() => {
              this.jumpTo(move);
            }}
          >
            {desc}
          </button>
        </li>
      );
    });

    //数据修改的两种方式 1.直接修改原数据 ，2.使用新数据替换原数据，原数据不会变化
    //在React中，我们使用新数据替换原数据的方式，直接方便我们跟踪数据
    if (calculateWinner(squares) || squares[i]) {
      //判断获胜后直接返回
      return;
    } //创建了一个复制，而不是直接修改原型
    squares[i] = this.state.xIsNext ? "x" : "o"; //xIsNext决定先手后手
    //设置点击元素块的值，点击后 null=> 'x'
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    const move = history.map((step, move) => {
      const desc = move ? `Go to remove` : "Go to game start";
      return (
        <li key={move}>
          <button
            onClick={() => {
              this.jumpTo(move);
            }}
          >
            {desc}
          </button>
        </li>
      );
    });
    if (winner) {
      status = "Winner:" + winner;
    } else {
      status = "Next Player" + (this.state.xIsNext ? "X" : "O");
    }
    //Board是子组件
    //renderHello()方法是将参数str传递给子组件
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{move}</ol>
        </div>

        <div>{this.renderHello(this.state.HelloWord)}</div>
      </div>
    );
  }
}
function calculateWinner(squares) {
  //获胜条件判断
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
//自定义组件
class HelloWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "null",
      message:'我是子组件',
      isShowClock:true,

    };
  }
  //点击事件
  handleClick(value) {
    console.log(value);
    this.setState({
      value: value,
    });
  }
  //父组件给子组件传值
  handleSubmit(){
    console.log('我是子组件的方法')
    console.log(this.props)
    this.props.onSubmit(this.state.message)

  }
  //父组件需要有个值接受子组件传递过来的值
  getvalue(value){
    console.log('我是Hello word组件',this)
    this.setState({
      value:value
    },()=>{
      console.log(this.state.message)
    })
    console.log(this)

  }
  handleShowOrHide(){
		this.setState({
			isShowClock:!this.state.isShowClock
		})
	}
  render() {
    //父组件通过props传递值， 子组件中使用this.props获取值
    //使用map接受传入的数据，返回li标签数据
    return (
      <div className="hello">
        <button onClick={() => this.handleClick(this.props.id)} onClick = {()=>{this.handleSubmit(this.state.message)}}>
          {this.props.id}
        </button>
        <ul>
          {this.props.value.map(t => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <Message
          value="[1,2,3,4,5,6]"
          linkText="http-serever"
          refs="隐藏属性"
         getvalue = {()=>{this.getvalue()}}
        />
        <div>{this.state.message}</div>
        {this.state.isShowClock?<Click/>:null}
        <button onClick ={()=>{this.handleShowOrHide()}}>显示隐藏时钟</button>
      </div>
    );
  }
}
//react.js中渲染列表使用map方法将数组数据返回成JSX形式
//组件需要大写开头,小写是标签
//渲染语法,
ReactDOM.render(
  <Game />, //JSX的标签
  document.getElementById("root")
);
