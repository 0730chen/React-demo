import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./router";
import LoginForm from "./component/login";
import style from "./style/Route.module.css";
import {HashRouter as Router, Link, Route} from "react-router-dom";
import Weather from "./component/Weather";
import Question from "./component/Question";
import About from "./about";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={LoginForm}/>
                    <Route exact path="/main/" component={Root}/>
                    <Route exact path="/question/" component={Question}/>
                    <Route exact path="/weather/" component={Weather}/>
                    <Route exact path="/about/" component={About}/>
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
