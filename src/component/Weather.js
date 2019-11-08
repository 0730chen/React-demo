import React from "react";
import axios from "axios";
import "../style/Weather.scss";
import imgurl from '../img/sunny.png'
//图片需要引入
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      weather: [],
      weatherIcon: {
        sunny: "../img/sunny.png",
        cloudy: "../img/cloudy.png"
      }
    };
  }
  handleInput(e) {
    let value = e.target.value;
    this.setState({
      value: value
    });
  }
  getWeatherMessage(id) {
    axios
      .get(
        `https://restapi.amap.com/v3/weather/weatherInfo?city=${id}&key=05394649327242f4976259b38eefdcef`
      )
      .then(res => {
        console.log(res);
        let data = res.data.lives;
        this.setState({
          weather: data
        });
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
      this.getWeatherMessage(id);
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
          <div className="Weather-content">
            {this.state.weather.map((e, i) => {
              if(e.weather==="晴"){
                e.img = this.state.weatherIcon.sunny
              }
              return (
                <div key={i}>
                  {/* {if(e.weather==="晴天"){
                e.img = this.state.weather.sunny
              }} */}
                  <li>省份:{e.province}</li>
                  <li>区域:{e.city}</li>
                  <li>humidity:{e.humidity}</li>
                  <li>查询时间:{e.reporttime}</li>
                  <li>温度:{e.temperature}℃</li>
                  <li>
                    {/* <img src={e.img}></img>:{e.weather} */}
                    <img src={imgurl}/>
                  </li>
                  <li>风向:{e.winddirection}</li>
                  <li>风力:{e.windpower}</li>
                </div>
              );
            })}
            {/* <li>省份:{this.state.weather[0].province}</li>
            <li>区域:{this.state.weather[0].city}</li>
            <li>humidity:{this.state.weather[0].humidity}</li>
            <li>查询时间:{this.state.weather[0].reporttime}</li>
            <li>温度:{this.state.weather[0].temperature}</li>
            <li>天气:{this.state.weather[0].weather}</li>
            <li>风向:{this.state.weather[0].winddirection}</li>
            <li>风力:{this.state.weather[0].windpower}</li> */}
            {/* {this.state.weather[0].map(e => {
              return <div>
              <li>省份:{e.province}</li>
              <li>区域:{e.city}</li>
              <li>humidity:{e.humidity}</li>
              <li>查询时间:{e.reporttime}</li>
              <li>温度:{e.temperature}</li>
              <li>天气:{e.weather}</li>
              <li>风向:{e.winddirection}</li>
              <li>风力:{e.windpower}</li>
              </div>;
            })} */}
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
