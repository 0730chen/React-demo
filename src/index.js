<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={function(){alert('click')}}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player:'+this.i;

    return (
      <div>
        <div className="status">{status}</div>
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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
      className="square" onClick={()=>{this.props.onClick()}}
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

function Square1(props){
  console.log('我是函数组件')
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}
class Board extends React.Component {
  //renderSquare函数接收一个参数，返回一个Square对象，所以 Board组件是Square的父组件
  constructor(props){
    super(props)
    //相当于Vuex中的state仓库，用来存放数据
    this.state = {
        squares:Array(9).fill(null),
        xIsNext:true,//true为先手
    }
  }
  //是为了给子组件传值square
  renderSquare(i) {
    //本来传递的是0-9
    // return <Square value={i}/>
    //父组件向子组件传递一个函数，当Square被点击则函数被调用
     return < Square1 
     value={this.state.squares[i]} 
     onClick={()=>{this.handleClick(i)}}
     />; 
  }
  //定义传递给子组件的函数，当点击Square时，函数触发
  handleClick(i){
    console.log(`我是第${i}个元素块`)
    //数据修改的两种方式 1.直接修改原数据 ，2.使用新数据替换原数据，原数据不会变化
    //在React中，我们使用新数据替换原数据的方式，直接方便我们跟踪数据
    const squares = this.state.squares.slice()//创建了一个复制，而不是直接修改原型
    squares[i] = this.state.xIsNext ? 'x':'o'//xIsNext决定先手后手
    //设置点击元素块的值，点击后 null=> 'x'
    this.setState({squares:squares,xIsNext:!this.state.xIsNext})

  }

  render() {
    console.log(this)
    const status = 'what react:'+(this.state.xIsNext?'x':'o')

    return (
      <div>
        <div className="status">{status}</div>
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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={function(){alert('click')}}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player:'+this.i;

    return (
      <div>
        <div className="status">{status}</div>
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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

>>>>>>> bad278afdf632c337a3b36eab0e234fcccd38945
