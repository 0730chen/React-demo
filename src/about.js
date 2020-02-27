import React from "react";
import axios from "axios";
import './style/About.scss'
import TitleBar from "./router";

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Alldata: []
        }
    }
    getAllContent() {
        axios.get("api/ccc").then(res => {
            let data = res.data;
            let hash = {};
            let result = data.data.reduce((item, next) => {
                if (hash[next.author]) {
                } else {
                    hash[next.author] = next.author;
                    item.push(next);
                }
                return item;
            }, [])
            this.setState({
                Alldata: result
            })
        });
    }
    componentWillMount() {
        this.getAllContent();
    }
    render() {
        return (
            <div>
                <TitleBar/>
                <div>
                    {this.state.Alldata.map((e, i) => {
                        return (
                            <div key={i} className="Question">
                                <div className="author">{e.author}</div>
                                <div>{e.title}</div>
                                <div className="article" dangerouslySetInnerHTML={{__html: e.wrapper}}>
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
