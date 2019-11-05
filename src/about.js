import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './about.css'
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
	<h1>我是关于界面</h1>
	<ul>
	<li>
	另一个界面
	</li>
	</ul>
	</div>)
  }
}

export default About;
