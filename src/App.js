import React, { Component } from 'react'
import "./App.css"
import Weather from './components/weather.component'
import 'bootstrap/dist/css/bootstrap.min.css'


//api.openweathermap.org/data/2.5/weather?q=London,uk
const API_KEY = 'Your Key';



export default class App extends Component {
  constructor(){
    super();
    this.state = {
      city : undefined,
      country : undefined,
      icon : undefined,
      main : undefined,
      celsius : undefined,
      temp_max : undefined,
      temp_min : undefined,
      description : "",
      error : false 
    };
    this.getWeather();
    this.weatherIcon = {
      Thunderstorm:"fa-poo-storm",
      Drizzle : "",
      Rain : "fa-cloud-showers-heavy",
      Snow : "fa-snowflake",
      Atmosphere : "fa-smog",
      Clear : "fas fa-sun",
      Clouds : "fa-cloud-sun"
    }
  }

  getWeatherIcon(icon,rangeId){
    switch(true){
      case rangeId>=200 && rangeId<=232 : 
      this.setState({ icon : this.weatherIcon.Thunderstorm });
      break;
      case rangeId>=300 && rangeId <=321:
        this.setState({ icon : this.weatherIcon.Drizzle });
        break;
      case rangeId>=500 && rangeId <=531:
          this.setState({ icon : this.weatherIcon.Rain });
          break;
      case rangeId>=600 && rangeId <=622:
           this.setState({ icon : this.weatherIcon.Snow });
            break;
      case rangeId>=701 && rangeId <=781:
            this.setState({ icon : this.weatherIcon.Atmosphere });
            break;
      case rangeId=800 :
              this.setState({ icon : this.weatherIcon.Clear });
              break;
      case rangeId>=801 && rangeId <=804 :
                this.setState({ icon : this.weatherIcon.Clouds });
                break;
      default :
          this.setState({ icon : this.weatherIcon.Clouds });
    }

  }

  getWeather = async ()=>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`);

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city : response.name,
      country : response.sys.country,
      celsius : Math.floor(response.main.temp-273.15),
      temp_min : Math.floor(response.main.temp_min-273.15),
      temp_max : Math.round(response.main.temp_max-273.15,2),
      description : response.weather[0].description
    })

    this.getWeatherIcon(this.weatherIcon,response.weather[0].id);
  }
  render() {
    return (
      <div className="App">
      <Weather 
      city={this.state.city} 
      country={this.state.country} 
      temp_celsius={this.state.celsius} 
      temp_min={this.state.temp_min} 
      temp_max={this.state.temp_max} 
      description={this.state.description}
      weathericon = {this.state.icon}
      />        
      </div>
    )
  }
}

