import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuestionTitle from './bar'
import About from './about'
import Question from'./component/Question'
import Search from './component/Search'
import style from './style/Route.module.css'

class TitleBar extends React.Component{
  constructor(props){
    super(props)
  }

//一个组件就相当于一个页面
  render(){
    console.log('路由组件')
    return(
      <Router>
      <Search/>
      <nav className={style.nav}>
      <ul className={style.title}>
      <li className={style.link}><Link to="/zhihu">大V列表</Link></li>
      <li className={style.link}><Link to="/about">问题回答</Link></li>
      <li className={style.link}><Link to="/user">推荐的优秀问题</Link></li>
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