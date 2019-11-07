import React from "react";
// import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import style from "./About.module.css";
import axios from "axios";
import './style/About.scss'
class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Alldata:[]
    }
  }

  getAllContent() {
    console.log("发起一个请求");
    axios.get("api/zhihu").then(res => {
      //此时数据有重复
      let data = res.data;
      let hash = {};
      let result = data.reduce((item, next) => {
        if (hash[next.author]) {
        } else {
          hash[next.author] = next.author;
          console.log(next);
          item.push(next);
        }
        return item;
      }, [])
      this.setState({
        Alldata:result
      })
    });
  }
  //

  componentWillMount() {
    // this.getAllContent();
  }

  render() {
    return (
      <div>
        <div className={style.title}>我是一个cssmodule</div>
        <div>
        {this.state.Alldata.map((e,i)=>{
          return (
            <div key={i} className="Question">
            <div className="author">{e.author}</div>
            <div>{e.title}</div>
            <div className="article" dangerouslySetInnerHTML = {{ __html:e.wrapper }}>
            </div>
            </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default About;
