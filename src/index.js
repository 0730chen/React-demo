import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./router";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Root/>
        );
    }
}

ReactDOM.render(
    //这个组件是所有的父组件
    <App/>
    ,
    document.getElementById("root")
);
