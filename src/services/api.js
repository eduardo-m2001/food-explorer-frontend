import axios from "axios";

export const api = axios.create({
    baseURL: "https://food-explorer-api-8esk.onrender.com"
});