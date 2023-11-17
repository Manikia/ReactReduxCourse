import { useState, useEffect} from "react";
import getCityWeather from "./getCityWeather";
import './outputCitiesStyling.css'

const OutputWeather = ({ cityName, unit }) => {
    const [cityData, setCityData] = useState()

    useEffect(()=>{
        const fetchData = async () => {
            const response = await getCityWeather(cityName, unit)
            setCityData(response)
        }
        fetchData()
    }, [cityName, unit]);

    

    if (!cityData){
        return (
            <h1>Theres no city for you, pal.</h1>
        )
    }
    else{
        return (
            <div className="cities">
            
            <h1>location: {cityData.location}</h1>
            <h1>current Temperature: {cityData.currentTemp}</h1>
            <h1>Min Temperature: {cityData.tempMin}</h1>
            <h1>Max Temperature: {cityData.tempMax}</h1>
            <h1>Humidity: {cityData.humid}</h1>
            </div>
        )
    }

    // useEffect(() => {
    //     return(
    //         // if (cityName === undefined) {
    //         <h1>Uh buddy, there is no city.</h1>
    //         // }

    //         // else {
    //         //     const result =  getCityWeather(cityName)

    //         //     <h1>here is my city: {result}</h1>


    //         // }
    //     )
    // }) [cityName===undefined? "":cityName];

    // const result =  getCityWeather(cityName)
    //     return(
    //         <h1>here is my city: {result}</h1>
    //     )
    // const cityData =  await getCityWeather(cityName)
    // console.log(cityData)
    // return(cityData.location)

    // const showWeather = () => {
    //     const [city, setCity] = useState([]);
    //     useEffect(() => {
    //         async function outputWeather(cityName){
    //             const cityData =  await getCityWeather(cityName)
    //             console.log(cityData)
    //         return(cityData.location)
    //         }
    //         outputWeather();
    //     }, []);
    // }
}

export default OutputWeather;