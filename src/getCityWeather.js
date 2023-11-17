import { WEATHER_API_URL, weatherApiOptions, APIkey} from "./api";

const getCityWeather = async (inputCity, switchUnit) =>{

    //imperial = farenheit
    //metric = celcius

    const response = await fetch(`${WEATHER_API_URL}${inputCity}&units=${switchUnit}&appid=${APIkey}`, weatherApiOptions);
    const cityDetail = await response.json();
        if(cityDetail.message === 'bad query'){
            return null
        }
        else{
        return{
            location: `${cityDetail.name}`,
            currentTemp: `${cityDetail.main.temp}`,
            tempMin: `${cityDetail.main.temp_min}`,
            tempMax: `${cityDetail.main.temp_max}`,
            humid: `${cityDetail.main.humidity}`,
            // options: response.data?.map((city) =>{
            //     return {
            //         value: `${city.name}`,
            //     }
            // })
        };
    }
};



export default getCityWeather;