import React from "react";
import TitleBar from "./component/TitleNav";
class Root extends React.Component {
    constructor(props) {
        super(props)
    }

//一个组件就相当于一个页面
    render() {
        return (
            <TitleBar/>
        )
    }
}

export default Root