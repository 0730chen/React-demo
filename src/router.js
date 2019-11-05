import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuestionTitle from './bar'
import './bar.css'
import About from './about'
import Question from'./component/Question'

class TitleBar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log('路由组件')
    return(
      <Router>
      <nav>
      <ul className="titele">
      <li><Link to="/zhihu">推荐</Link></li>
      <li><Link to="/about">关注</Link></li>
      <li><Link to="/user">消息</Link></li>
      <li><Link to="/question">问题</Link></li>
      </ul>
      </nav>
      <Switch>
      <Route path="/about" exact><About/></Route>
      <Route path="/zhihu" exact><Question/></Route>
      <Route path="/user" exact><QuestionTitle/></Route>
      <Route path ="/question" exact><Question/> </Route>
      </Switch>
      </Router>
    )
  }
}
export default TitleBar