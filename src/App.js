import axios from 'axios';
import {useState } from 'react';
import './App.css';

function App() {
  const apiKey="e0245e245856f60c6c42b88828eb7334"
  const [data,setData] =useState({})
  const [inputCity,setInputCity] =useState("")

  const getWetherDetails=(cityName)=>{
    if(!cityName) return;
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    axios.get(apiUrl).then((res)=>{
      console.log("response",res)
      setData(res.data)
    }).catch((err)=>{
      console.log("err",err)
    })
  }

  const handleSearch=()=>{
    getWetherDetails(inputCity)
  }

  const handleChangeInput=(e)=>{
    setInputCity(e.target.value)
  }
  
  return (
    <div className='col-md-12'>
      <div className="weatherBg">
        <h1>Weather App</h1>
        <div className='icon_temp'>
          <div className="btn_inp">
            <input type="text" 
              className='form_control' 
              onChange={handleChangeInput}
              value={inputCity}
              placeholder="Enter City Name"
            />
            <button className='btn' onClick={handleSearch} type='button'>Search</button>
          </div>

          {/* temp showing box */}
        <div>
          <div className="weatherResultBox">
            <h5 className="city">{data?.name}</h5>
            <h5 className="temp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h5>
            <div className="weatherImg"></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
