import React from "react";
import ReactDOM from "react-dom";

class Click extends React.Component{
	constructor(props){
		super(props)
		this.state={
			data:new Date()
		}
	}
	//组件启动，ajax请求，数据的拉取一般放在componentWillMoun中
	//render之前的触发的函数
	componentWillMount() {
		console.log('组件将要挂载')
		this.timer = setInterval(() => {
			this.setState({
				data:new Date()
			})
		}, 1000);
	}
	handleShowOrHide(){
		this.setState({
			isShowClock:!this.state.isShowClock
		})
	}
	
	componentWillUnmount() {
    //DOM删除之前调用
	//在钟表隐藏前，调用，清楚定时
    clearInterval(this.timer)
  }
	render() {
		return (
			<div>
			<h3>我是时钟模块</h3>
			<p>现在时间是</p>{this.state.data.toLocaleTimeString()}	
			</div>
		)
	}
}

export default Click