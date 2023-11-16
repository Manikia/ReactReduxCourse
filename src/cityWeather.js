import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

//will return the city, state, and temp of city being searched for
const CityWeather = ({city, state, temperature}) => {
  return(
    <div>
      <h1>{city}</h1>
      <p>{state}</p>
      <p>Temperature: {temperature}</p>
    </div>
  );
}

CityWeather.propTypes = {
    city: PropTypes.string,
    state: PropTypes.string,
    temperature: PropTypes.number,
  }


export default CityWeather;