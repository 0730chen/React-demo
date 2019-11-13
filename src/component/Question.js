import React from "react";
import ReactDom from "react-dom";
import "../style/Question.scss";

//引入需要的包

//1.问题组件 分为title 问题  回答框
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: [
        { username: "haha", age: "18", title: "你遇到的有趣的事" },
        { username: "zzzz", age: "18", title: "你遇到的开心的事" },
        { username: "xxxx", age: "18", title: "你遇到的高兴的事" },
        { username: "风云", age: "18", title: "风云决战" },
        { username: "风清扬", age: "18", title: "独孤九剑" }
      ],
      bigV: [
        { username: "牛客网" },
        { username: "路人甲" },
        { username: "九章算法" },
        { username: "有雨西" },
        { username: "兔子" },
        { username: "阿狗" },
        { username: "天王盖地虎" },
		{username:'哈哈哈'},
		{username:'王者荣耀'}
      ]
    };
  }
  render() {
    return (
      <div>
        <div>显示最新的热点</div>
        <div className="question-main">
          <div className="bigVlist">
            {this.state.bigV.map((item, i) => {
              return (
                <div className="user" key={i}>
                  <li>{item.username}</li>
                </div>
              );
            })}
          </div>
          <ul>
            {this.state.focus.map((item, i) => {
              return (
                <div key={i}>
                  <li>{item.username}</li>
                  <li>{item.title}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Question;
