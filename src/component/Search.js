import React from "react";
import { Button } from "antd";
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
  render() {
    return (
      <div className="Search">
        <div className="logo">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-zhihu"></use>
          </svg>
        </div>
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
