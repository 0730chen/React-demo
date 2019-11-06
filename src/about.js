import React from "react";
// import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import style from "./About.module.css";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={style.title}>我是一个cssmodule</div>
        <ul>
          <li>另一个界面</li>
        </ul>
      </div>
    );
  }
}

export default About;
