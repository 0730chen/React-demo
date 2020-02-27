import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Search from './Search'
import style from '../style/Route.module.css'
import LoginForm from "./login";
import Weather from "./Weather";
import About from "../about";

class TitleBar extends React.Component {
    constructor(props) {
        super(props)
    }

//一个组件就相当于一个页面
    render() {
        return (
            <Router>
                <Search/>
                <ul className={style.title}>
                    <li className={style.link}><Link to="/question">热点榜单</Link></li>
                    <li className={style.link}><Link to="/about">知乎问答</Link></li>
                    <li className={style.link}><Link to="/weather">天气查询</Link></li>
                </ul>
                <Route exact path="/question/" component={LoginForm}/>
                <Route exact path="/weather/" component={Weather}/>
                <Route exact path="/hot" component={About}/>
            </Router>
        )
    }
}

export default TitleBar