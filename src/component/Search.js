import React from "react";
import {Button} from "antd";
import "../style/Search.scss";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    handleGetInput(e) {
        let newValue = e.target.value;
        this.setState({
            value: newValue
        });
    }

    openClick() {
        console.log(this.state.value);
        window.location.href = `https://www.baidu.com/s?wd=${this.state.value}`;

    }

    render() {
        return (
            <div className="Search">
                <div className="logo">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-zhihu"></use>
                    </svg>
                </div>
                <form action="https://www.baidu.com/s" method="get" id="search">
                    <input
                        ref={input => {
                            this.input = input;
                        }}
                        defaultValue={this.state.value}
                        type="text"
                        placeholder="Search"
                        onChange={e => {
                            this.handleGetInput(e);
                        }}
                    />
                    <Button
                        type="submit"
                        icon="search"
                        onClick={() => this.openClick()}
                    >
                        Search
                    </Button>
                </form>
            </div>
        );
    }
}

export default Search;
