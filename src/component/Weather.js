import React from "react";
import axios from "axios";
import "../style/Weather.scss";
import TitleBar from "../router";

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            weather: [],
            weatherIcon: [
                {weather: '晴'},
                {weather: '多云'},
                {weather: "雨"},
                {weather: "雪"},
            ],
            flag: '',
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
                if (res.data.count === "0") {
                    console.log("名字出错");
                    alert("请输入正确的地名");
                }
                let data = res.data.lives;
                this.setState({
                    weather: data,
                    flag: data.weather
                });
            });
    }

    getInputValue(city) {
        let cityName = this.state.value;
        axios.post("http://www.chentian.ltd/hot/weather", `${cityName}`).then(res => {
            let id = res.data;
            this.getWeatherMessage(id);
        });
    }

    render() {
        return (
            <div>
                <TitleBar/>
                <div className="sendCity">
                    <input
                        className="city"
                        type="text"
                        placeholder="输入地区的全称例如：萧山区，杭州市，武功县"
                        onChange={e => {
                            this.handleInput(e);
                        }}
                    />
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
                <div className="Weather-content">
                    {this.state.weather.map((e, i) => {
                        this.state.weatherIcon.forEach(weatherType => {
                            {/* console.log(e)
                    console.log(weatherType) */
                            }
                            if (e.weather === weatherType.weather) {
                                console.log(e.weather)
                            }
                        });
                        return (
                            <div key={i}>
                                <li>省份:{e.province}</li>
                                <li>区域:{e.city}</li>
                                <li>humidity:{e.humidity}</li>
                                <li>时间:{e.reporttime}</li>
                                <li>温度:{e.temperature}℃</li>
                                <li>
                                    天气:{this.state.flag}
                                    <svg className="icon" aria-hidden="true">
                                        <use xlinkHref="#icon-tianqi-"></use>
                                    </svg>
                                </li>
                                <li>风向:{e.winddirection}</li>
                                <li>风力:{e.windpower}</li>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Weather;
