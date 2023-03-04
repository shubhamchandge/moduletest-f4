import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { client } from '../../client';
import { PATHS } from '../../path';
import Weatherpage from '../Weatherpage/Weatherpage';
import "./Searchpage.css"


const Searchpage = () => {
    const [city, setCity] = useState("");
  const [dataitem, setdataitem] = useState({})
    const navigate = useNavigate();

    // handling input in searchbar
    const handlechange = (e) => {
        setCity(e.target.value);
       
    }

    //decleration
    const cityname = city.replace(" ", "+")
    const apikye = "41de2471d37047c5b0c100520230403";

    // {
    //     <Weatherpage cityname={cityname} apikye={apikye}/>
    // }

    // handling button
    const handleclick = () => {

        navigate(`/weather/${city}`)
    //    const url = `https://api.weatherapi.com/v1/current.json?key=${apikye}&q=${cityname}`;

    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data); 
    //             setdataitem([data])
    //             console.log(dataitem);
                

    

    //             console.log(data.location.name);
    //             console.log(data.current.condition.text);
    //             console.log(data.current.condition.icon);
    //             console.log(data.current.temp_c)
    //             console.log(data.current.temp_f)


    //             navigate(`/weather/${data.location.name}`)
    //          })    

    }


    return (
        <div>
            <div className='container'>
                <div className='header'>
                    <h1>Weather Api</h1>
                </div>
                <div className=''>
                    <input className='search-inputbox' type="text" value={city} onChange={handlechange} placeholder="Location"></input>
                </div>
                <div className='btn'>
                    <button onClick={handleclick}>Search</button>
                </div>
            </div>



        </div>
    )
};

export default Searchpage