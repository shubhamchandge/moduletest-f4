
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Weatherpage.css"

function Weatherpage() {
    const { cityname } = useParams();
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    console.log(cityname)

    useEffect(() => {
        const API_KEY = "41de2471d37047c5b0c100520230403";
        fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityname}`)
            .then((response) => response.json())
            .then((data) => {

                setWeatherData(data);

                console.log(data.location.name);
                console.log(data.current.condition.text);
                console.log(data.current.condition.icon);
                console.log(data.current.temp_c)
                console.log(data.current.temp_f)
                console.log(data.current.pressure_in)
                console.log(data.current.cloud)
                console.log(data.location.tz_id)

            })
            .catch((error) => {
                console.log(error);

            });
    }, [cityname]);

// after uncomment code run successfully

    // if (loading) {
    //     return <div> wait..and  comment part of if-loading </div>;
    // }

    // if (error || Object.keys(weatherData).length === 0) {
    //     alert("Location Not Found.. !");
    //     return (window.location.href = "/");
    // }



    return (
        <div className="box">
            <h1 className="header2" style={{ color: "black" }}>
                Weather Details
            </h1>
            <div className="checkbox1">
                <label>
                    <input id="input1"
                        type="checkbox"
                        name="Celsius"

                    />
                    Celsius
                </label>
            </div>
            <div className="checkbox2">
                <label>
                    <input id="input2"
                        type="checkbox"
                        name="Fahrenheit"

                    />
                    Fahrenheit
                </label>
            </div>


            <div className="data-container">
                {/* <img
                    src={weatherData.current.condition.icon}
                    alt={weatherData.current.condition.text}
                /> */}
                <p>
                    Location:
                    {/* Location: {weatherData.location.name} */}

                </p>

                {/* <p>Cloud : {weatherData.current.cloud}</p> */}
                <p>Cloud : </p>
                <p>
                    Longitude:

                </p>

                {/* <p>
                    Longitude: {weatherData.location.lon}{" "}
                    <span className="lat">Latitude: {weatherData.location.lat}</span>{" "}
                </p> */}


                <p>
                    Country :

                </p>
                {/* 
                <p>
                    Country : {weatherData.location.country}{" "}
                    <span className="region">Region : {weatherData.location.region}</span>{" "}
                </p> */}
                <p>
                    Time_Zone:

                </p>
                {/* <p>
                    Time_Zone: {weatherData.location.tz_id}{" "}
                    <span>Local Time : {weatherData.location.localtime}</span>{" "}
                </p> */}

                <p>UV Index : </p>
                {/* <p>UV Index : {weatherData.current.uv}</p> */}

            </div>
        </div>
    );
}





export default Weatherpage;
