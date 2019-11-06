import React from "react";

import ReactDOM from "react-dom";
import { Button } from "antd";
import { Icon } from "antd";
import "../style/Search.scss";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleGetInput(e) {
    console.log(e);
    console.log(e.target.value);
    let newValue = e.target.value;
    this.setState({
      value: newValue
    });
  }
  sendSearch() {
    console.log(this.state);
    console.log(this.state.value);
  }
  render() {
    return (
      <div className="Search">
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
          type="primary"
          icon="search"
          onClick={e => {
            console.log(this.state.value);
          }}
        >
          Search
        </Button>
      </div>
    );
  }
}
export default Search;
