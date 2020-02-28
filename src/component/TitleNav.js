import React from "react";
import {
    NavLink,
} from "react-router-dom";
import Search from './Search'
import style from '../style/Route.module.css'
import '../style/Nav.scss'

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
                    <li className={style.link}><NavLink to="/question" exact activeClassName="selected">热点榜单</NavLink>
                    </li>
                    <li className={style.link}><NavLink to="/about" exact activeClassName="selected">知乎问答</NavLink>
                    </li>
                    <li className={style.link}><NavLink to="/weather" exact activeClassName="selected">天气查询</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TitleBar