import React from "react";
import "../style/Question.scss";
import axios from "axios";
import TitleBar from "../router";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: [],
            bigV: [
                {username: "知乎"},
                {username: "微博"},
                {username: "Github"},
                {username: "掘金文章"},
                {username: "前沿技术"},
                {username: "谷歌"},
            ],
            HotArray: [],
            api: {}
        };
    }

    async getHotData(Api) {
        let res = await axios.get(`http://www.chentian.ltd/hot/${Api}`);
        let data = res.data;
        this.setState({
            HotArray: data
        });
    }

    handleClick(e) {
        let tab = e.target.innerText;
        let hash = {
            "知乎": '/hot',
            "微博": '/weibo',
            "Github": "/github",
            "掘金文章": "/juejin"
        }
        this.getHotData(hash[tab])
    }

    componentWillMount() {
        this.getHotData('/hot')
    }

    render() {
        return (
            <div>
                <TitleBar/>
                <div className="question-main">
                    <div className="bigVlist" onClick={e => {
                        this.handleClick(e);
                    }}>
                        {this.state.bigV.map((item, i) => {
                            return (
                                <div className="user" key={i}>
                                    <li>{item.username}</li>
                                </div>
                            );
                        })}
                    </div>
                    <ul className="Hot-wrapper">
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
