import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import About from './about'
import Question from './component/Question'
import Search from './component/Search'
import Weather from './component/Weather'
import style from './style/Route.module.css'
import LoginFrom from './component/login'


class TitleBar extends React.Component {
    constructor(props) {
        super(props)
    }

//一个组件就相当于一个页面
    render() {
        return (
            <Router>
                <Search/>
                <nav className={style.nav}>
                    <ul className={style.title}>
                        <li className={style.link}><Link to="/zhihu">大V列表</Link></li>
                        <li className={style.link}><Link to="/question">知乎组件</Link></li>
                        <li className={style.link}><Link to="/weather">天气查询</Link></li>
                    </ul>
                </nav>
            </Router>
        )
    }
}

export default TitleBar