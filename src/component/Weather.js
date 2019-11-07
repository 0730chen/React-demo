import React from "react";
import axios from "axios";
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleInput(e) {
    let value = e.target.value;
    this.setState({
      value: value,
      weather:[]
    });
  }
  getWeatherMessage(id) {
    axios
      .get(
        `https://restapi.amap.com/v3/weather/weatherInfo?city=${id}&key=05394649327242f4976259b38eefdcef`
      )
      .then(res => {
        console.log(res);
        let data = res.data.lives
        this.setState({
          weather: data
        })
      });
  }
  getInputValue(city) {
    //如果存在则获取citycode

    // axios
    //   .get(
    //     `https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=05394649327242f4976259b38eefdcef`
    //   )
    //   .then(res => {
    //     console.log(res);
    //   });
    // axios.post(`api/weather`,{value:'hangzhou'}).then((res)=>{console.log(res)})
    let cityName = this.state.value;
    axios.post("api/weather", `${cityName}`).then(res => {
      let id = res.data;
      this.getWeatherMessage(id)
    });
  }
  render() {
    return (
      <div>
        <input
          className="city"
          type="text"
          placeholder="输入地区的全称例如：萧山区，杭州市，武功县"
          onChange={e => {
            this.handleInput(e);
          }}
        />
        <div>
          <button
            type="button"
            onClick={() => {
              console.log(this.state.value);
              this.getInputValue();
            }}
          >
            查询
          </button>
        </div>
      </div>
    );
  }
}

export default Weather;
