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
			//数组内容重复
			let result = res.data
			//相当于使用了 hashTable
			let hash = {}

			//另一种思路，使用一个空数组，储存author，判断空数组中是否存在值，不存在则添加进去
			//reduce第一个参数是当前值,相当于一个篮子
			//第二个参数是当前循环值
			//第三个参数是当前遍历的索引值
			//第四个参数是初始值。篮子中的初始值
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

//可以将ajax数据渲染到组件中去
//成功拿到数据并显示
	render() {
		return (
			<div>
			{/* <div>{this.state.result}</div> */}
			{this.state.result.map((e,i)=>{
				return (
					<div key={i}>
					<div>{e.author}</div>
					</div>
				)
			})}
			{/* {this.state.result.map((e,i)=>{
				return(
					<div key={i}>
					<div>{e[0]['author']}</div>
					</div>
				)
			})} */}
			</div>
		)
	}
}

export default Content