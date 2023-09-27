import axios from "axios";

/*----------- VARIABLES ------------*/
const API = "https://newsapi.org/v2/everything";
const API_TOKEN = "d6d668d41ff24c5e8d24c15b67e7008b";

/*----------- CONFIGURATION OBJECTS ------------*/
const fetchData = {
    url: API,
    params: {
        q: "bitcoin",
        apiKey: API_TOKEN,
    },
};

/*----------- AXIOS INSTANCE ------------*/
export const newsInstance = axios.create({
    baseURL: fetchData.url,
    method: "GET",
    params: fetchData.params,
});
