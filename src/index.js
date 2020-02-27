import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./router";
import LoginForm from "./component/login";
import style from "./style/Route.module.css";
import {HashRouter as Router, Link, Route} from "react-router-dom";
import Weather from "./component/Weather";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router>
                    <ul className={style.title}>
                        <li className={style.link}><Link to="/"/></li>
                        <li className={style.link}><Link to="/main"/></li>
                    </ul>
                    <Route exact path="/" component={LoginForm}/>
                    <Route exact path="/main/" component={Root}/>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(
    //这个组件是所有的父组件
    <App/>
    ,
    document.getElementById("root")
);
