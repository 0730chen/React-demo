import React from 'react'
import ReactDom from 'react-dom'

//引入需要的包

//1.问题组件 分为title 问题  回答框
class Question extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
			<h1>我是问题的标题</h1>
			<div className="question-main">问题内容</div>
			</div>
		)
	}

}

export default Question