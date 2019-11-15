import React from "react";
import "../style/Question.scss";
import axios from "axios";

//引入需要的包

//1.问题组件 分为title 问题  回答框
class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: [],
            bigV: [
                {username: "知乎"},
                {username: "微博"},
                {username: "Github"},
                {username: "搜索指数"},
                {username: "前沿技术"},
                {username: "谷歌"},
                {username: "王者荣耀"}
            ],
            HotArray: [],
            api: {}
        };
    }

    async getHotData(Api) {
        console.log(Api)
        let res = await axios.get(`api/${Api}`);
        let data = res.data;
        console.log(data)
        this.setState({
            HotArray: data
        });
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    handleClick(e) {
        let tab = e.target.innerText;
        console.log(tab);
        let hash = {
            "知乎": '/hot',
            "微博": '/weibo',
            "Github": "/github",
        }
        this.getHotData(hash[tab])
        // this.getHotData();
    }

    componentWillMount() {
        // this.getHotData();
    }

    render() {
        return (
            <div>
                <div>显示最新的热点</div>
                <div className="question-main">
                    <div
                        className="bigVlist"
                        onClick={e => {
                            this.handleClick(e);
                        }}
                    >
                        {this.state.bigV.map((item, i) => {
                            return (
                                <div className="user" key={i}>
                                    <li>{item.username}</li>
                                </div>
                            );
                        })}
                    </div>
                    <ul>
                        {this.state.HotArray.map((item, i) => {
                            return (
                                <div key={i} className="Hot-item">
                                    <svg className="icon star" aria-hidden="true">
                                        <use xlinkHref="#icon-zu"></use>
                                    </svg>
                                    <div className="Index">{item.index}</div>
                                    <div className="Title-Container">
                                        <a href={item.Link}>{item.Title}</a>
                                        <div className="Rank">{item.Rank}</div>
                                    </div>
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
