import React from "react";
import ReactDOM from "react-dom";
import "./message.css";

//Message是整个留言板的父组件
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "1",
      message: "子组件",
      comments: []
    };
  }
  // constructor(props) {
  // 	super(props)
  // 	this.state = {
  // 		message:'信息组件''
  // 	}
  // }
  getInputMessage(Content) {
    //出现bug，每次都只能存一个数据，原因是每次都将数据初始化为一个空数组
    //   console.log(Content)
    //   let comments = []
    //   comments.push(Content)
    //   this.setState({
    // 	  comments:comments
    //   })
    this.state.comments.push(Content);
    this.setState({
      comments: this.state.comments
    });
  }
  sendValue(state) {
    console.log("发送数据");
    // console.log(this)
    // console.log(this.state.message)
    console.log(`发送的数据${state}`);
    // this.props.getValue(this.state.message)
    console.log(this.props);
    this.props.getvalue(state);
  }
  render() {
    // console.log("信息模块", this);
    return (
      <div className="message">
        留言板
        <div>Hello</div>
        <div>{this.props.value}</div>
        <div>{this.props.linkText}</div>
        <InputMessage
          getInputMessage={e => {
            this.getInputMessage(e);
          }}
        />
        <ShowMessage comments={this.state.comments} />
        {/* <button
          className="child"
          onClick={() => {
            this.sendValue(this.state.message);
          }}
        >
          传递
        </button> */}
      </div>
    );
  }
  //只能return 1个标签
  // return (
  // 	<div className = 'Message'>信息组件
  // 	<div>Hello{this.props.value}</div>
  // 	<div>{this.props.name.toUpperCase()}</div>
  // 	</div>
  // )
}
//输入框部分  1.组件的名称必须的大写的
//包含输入留言与输入用户名
class InputMessage extends React.Component {
  constructor(props) {
    super(props);
    //初始化参数
    this.state = {
      username: "",
      Content: ""
    };
  }
  //监听输入框的onchange事件改变state的值
  //传入参数，接受数据
  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }
  handleContentChange(event) {
    this.setState({
      Content: event.target.value
    });
  }
  SendInputMessage() {
    console.log(this.props, this.state.username, this.state.Content);
    this.props.getInputMessage({
      username: this.state.username,
      Content: this.state.Content
    });
  }
  //this.handleUsernameChange.bind(this) 作用与 (e)=>{this.handleUserName(e)}相同
  render() {
    return (
      <div>
        <div className="input">
          <div>留言板</div>
          <div className="Name">
            <span>用户名 :</span>
            <input
              type="text"
              value={this.state.username}
              onChange={e => {
                this.handleUsernameChange(e);
              }}
            ></input>
          </div>
          <div className="Content">
            <span>内容 ：</span>
            <textarea
              value={this.state.password}
              onChange={event => {
                this.handleContentChange(event);
              }}
            ></textarea>
          </div>
          <button
            onClick={() => {
              this.SendInputMessage();
            }}
          >
            发布
          </button>
        </div>
      </div>
    );
  }
}
class ShowMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      Content: "",
      comments: []
    };
  }
  render() {
    // const comments = [
    // 	{username:'jack',Content:'hello'},
    // 	{username:'love',Content:'lmeng'},
    // 	{username:'clear',Content:'水水'}
    // ]
    //使用map输出JSX语法标签
	//使用map时需要将
    console.log(this.props);
    return (
      <div className="showMessage">
        我是展示留言的界面
        {this.props.comments.map((comment, i) => {
          return (
			  <div key={i}>
            {/* <li key={i}>
              {comment.username}:{comment.Content}
            </li> */}
			<Content content = {comment}/>
			</div>
          )
        })}
        {/* <div className="showName">{this.props.username}</div>
			<div className="showContent">{this.props.Content}</div> */}
        {/* {comments.map((comment,i)=>{
				return (
					<div key={i}>{comment.username}:{comment.Content}</div>
				)
			})} */}
      </div>
    );
  }
}

class Content extends React.Component {
	//加入组件的生命周期
	//初始化
	constructor(){
		super()
		console.log(`初始化`)
	}
	//组件挂载前
	componentWillMount() {
		console.log('组件将要mount Willmount')
	}
	//组件挂载完成
	componentDidMount() {
		console.log('Didmount 挂在完成')
	}
	
	
  render() {
	  console.log('插入Dom树')
    return <div key={this.props.content.i}>{this.props.content.username}:{this.props.content.Content}</div>;
  }
}

export default Message;
