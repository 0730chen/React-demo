import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

class Content extends React.Component{
	constructor(props){
		super(props)
		this.state={
			result:[]
		}
	}
	//组件挂载前，数据请求
	componentDidMount() {	
		this.getDate()
		
	}
	
	getDate(){
		//使用proxy-http-middlewrea代理
		//music/personalized 可以成功访问 
		axios.get('api').then((res)=>{
			let result = res.data
			console.log(result)
			this.setState({
				result:result
			})
			console.log('this.state', this.state)
		})
	}

//可以将ajax数据渲染到组件中去
	render() {
		return (
			<div>
			<div>我是一个标签</div>
			{/* <div>{this.state.result}</div> */}
			{this.state.result.map((e,i)=>{
				return(
					<div key={i}>
					<div>{e[0]['author']}</div>
					</div>
				)
			})}
			</div>
		)
	}
}

export default Content