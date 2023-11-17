import { useState, useEffect } from "react";
import getCityWeather from "./getCityWeather";
import './outputCitiesStyling.css'

const OutputWeather = ({ cityName, unit }) => {
    const [cityData, setCityData] = useState()
    const [cityList, setCityList] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const response = await getCityWeather(cityName, unit)
            setCityData(response)
            if (response != null) {
                setCityList([ // with a new array
                    ...cityList, response // and one new item at the end
                ])
            }
        }
        fetchData()
    }, [cityName, unit]);

    // useEffect(()=>{
    //     const fetchList = async () => {
    //         <div className="cities">

    //         <h1>location: {cityData.location}</h1>
    //         <h1>current Temperature: {cityData.currentTemp}</h1>
    //         <h1>Min Temperature: {cityData.tempMin}</h1>
    //         <h1>Max Temperature: {cityData.tempMax}</h1>
    //         <h1>Humidity: {cityData.humid}</h1>
    //         </div>
    //     }
    //     // fetchList()
    // }, []);



    if (!cityData) {
        return (
            <h1>Theres no city for you, pal.</h1>
        )
    }
    else {
        return (
            cityList.map((cityBox) =>
            <div className="cities">
                <h1>location: {cityBox.location}</h1>
                <h1>current Temperature: {cityBox.currentTemp}</h1>
                <h1>Min Temperature: {cityBox.tempMin}</h1>
                <h1>Max Temperature: {cityBox.tempMax}</h1>
                <h1>Humidity: {cityBox.humid}</h1>
            </div>
          )
            
        )
    }

}

export default OutputWeather;