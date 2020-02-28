import React from "react";
import {Switch, HashRouter as Router, Route, Link} from 'react-router-dom';
import About from './about'
import Question from './component/Question'
import Weather from './component/Weather'
import LoginFrom from './component/login'
import Search from "./component/Search";
import style from './style/Route.module.css'
import TitleBar from "./component/TitleNav";


class Root extends React.Component {
    constructor(props) {
        super(props)
    }

//一个组件就相当于一个页面
    render() {
        return (
            <TitleBar/>
        )
    }
}

export default Root