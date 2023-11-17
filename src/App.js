import './App.css';
import Search from './search';
import OutputWeather from './outputWeather'
import { useState } from 'react';
import SwitchToggle from './switchToggle'
//import getCityWeather from './getCityWeather';

function App() {

  //creating a handler where it is able to create a search bar and search up, showing reference to serching up from API
  const [unit, setUnit] = useState('metric');
  const handleUnitSwitch =(switchUnit) =>{
    setUnit(switchUnit)
  }
  
  const [city, setCity] = useState();
  const handleOnSearchSubmit =(inputcity) =>{
    setCity(inputcity)
  }

  return (
    <div className="container">
      <Search onSubmitChange={handleOnSearchSubmit} />
      <SwitchToggle onHandleUnitSwitch = {handleUnitSwitch}/>
      <OutputWeather cityName = {city} unit = {unit}/>
    </div>
  );
}
export default App;