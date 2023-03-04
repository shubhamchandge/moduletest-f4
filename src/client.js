import axios from "axios";
const apikye = "41de2471d37047c5b0c100520230403";

export const client = axios.create({
    baseURL: `https://api.weatherapi.com/v1/current.json?`
})