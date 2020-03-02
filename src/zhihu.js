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
		axios.get('http://chentian.ltd/hot/ccc').then((res)=>{
			//数组内容重复
			let result = res.data
			let hash = {}
			let datas = result.reduce((item,next)=>{
				if(hash[next.author]){

				}else{
					hash[next.author] = next.author
					console.log(next)
					item.push(next)
				}
				return item
			},[])
			// let data = new Set(result)
			this.setState({
				result:datas
			})
			console.log('this.state', this.state)
		})
	}

	render() {
		return (
			<div>
			{this.state.result.map((e,i)=>{
				return (
					<div key={i}>
					<div>{e.author}</div>
					</div>
				)
			})}
			</div>
		)
	}
}

export default Content