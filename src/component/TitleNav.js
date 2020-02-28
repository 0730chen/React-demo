import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Search from './Search'
import style from '../style/Route.module.css'

class TitleBar extends React.Component {
    constructor(props) {
        super(props)
    }

//一个组件就相当于一个页面
    render() {
        return (
            <div>
                <Search/>
                <ul className={style.title}>
                    <li className={style.link}><Link to="/question" activeclassname="selected">热点榜单</Link></li>
                    <li className={style.link}><Link to="/about" activeclassname="selected">知乎问答</Link></li>
                    <li className={style.link}><Link to="/weather" activeclassname="selected">天气查询</Link></li>
                </ul>
            </div>
        )
    }
}

export default TitleBar