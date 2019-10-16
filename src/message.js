
import React from 'react';
import ReactDOM from 'react-dom';
import './message.css'

class Message extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			id:'1',
			message:'子组件'
		}
	}
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		message:'信息组件''
	// 	}
	// }
	sendValue(state){
		console.log('发送数据')
		// console.log(this)
		// console.log(this.state.message)
		console.log(state)
		// this.props.getValue(this.state.message)
		this.props.onClick(state)
	}
	render () {
		console.log('信息模块',this)
		return (
			<div className = 'message'>信息组件
			<div>Hello</div>
			<div>{this.props.value}</div>
			<div>{this.props.linkText}</div>
			<button className="child" onClick={()=>{this.sendValue(this.state.message)}}>传递</button>
			</div>
		)
	}
		//只能return 1个标签
		// return (
		// 	<div className = 'Message'>信息组件
		// 	<div>Hello{this.props.value}</div>
		// 	<div>{this.props.name.toUpperCase()}</div>
		// 	</div>
		// )
	
}
export default Message