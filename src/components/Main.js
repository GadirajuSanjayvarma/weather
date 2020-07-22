import React ,{useState} from 'react'
import axios from 'axios'
import Header from "./Header"
import Content from './Content'
import WeatherSearch from './WeatherSearch'
import Weatherdata  from './weatherData'



const Main = () =>
{
  const [weather,setWeather]  =useState()
  const [city,setCity]= useState()

  const api_call = async e =>
  {
    e.preventDefault();

    const location =e.target.elements.location.value

    const API_KEY = "bf147039776a8d23213dbb61206cef8c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
    const request=axios.get(url)
    const response = await request
    setWeather(response.data.main)
    setCity(response.data.name)
  }

return(
    <div className="Main">
        < Header />
        <Content>
    
            <WeatherSearch api_call={api_call} />
            
             { weather && <Weatherdata  weather ={weather} city={city}/> }
         
            </Content>
    </div>  
);

}
export default Main;