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
import Weather from './component/Weather'
import style from './style/Route.module.css'


class TitleBar extends React.Component{
  constructor(props){
    super(props)
  }

//一个组件就相当于一个页面
  render(){
    return(
      <Router>
      <Search/>
      <nav className={style.nav}>
      <ul className={style.title}>
      <li className={style.link}><Link to="/zhihu">大V列表</Link></li>
      <li className={style.link}><Link to="/">问题回答</Link></li>
      <li className={style.link}><Link to="/weather">天气查询</Link></li>
      </ul>
      </nav>
      <Switch>
      <Route path="/" exact><About/></Route>
      <Route path="/zhihu" exact><Question/></Route>
      <Route path="/weather" exact><Weather/></Route>
      <Route path ="/question" exact><Question/> </Route>
      </Switch>
      </Router>
    )
  }
}
export default TitleBar