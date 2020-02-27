import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Click from "./click";
import Message from "./message";
import TitleBar from "./router";
import LoginForm from "./component/login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Question from "./component/Question";
import About from "./about";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/zhihu"></Link></li>
                        <li><Link to="/"></Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/login" exact><LoginForm/></Route>
                    {/*<Route path="/zhihu"exact><TitleBar/></Route>*/}
                    <Route path="/zhihu" exact><Question/></Route>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(
    //这个组件是所有的父组件
    <App/>, //JSX的标签
    document.getElementById("root")
);
