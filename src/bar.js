import React from 'react'
// import ReactDOM from 'react-dom'


class QuestionBar extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			QuestionTitle:''
		}
	}
	render(){
		console.log('questionbar组件')
		return (
			<div>
			我是一个问题导航栏组件
			<ul className="haha">
			<li>关注</li>
			<li>推荐</li>
			<li>热榜</li>
			</ul>
			</div>
		)
	}
}

export default QuestionBar
