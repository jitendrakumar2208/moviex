/*const apiKey = "f57e1011798733c538ba74b824e8597c";
async function getMovieDetails(endpoint) {
    const baseUrl = 'https://api.themoviedb.org/3';
    //const endpoint = `/movie/popula`;
    const params = new URLSearchParams({
        api_key: apiKey,
    });

    try {
        const response = await fetch(`${baseUrl}${endpoint}?${params}`);

        // Check if request was successful (status code 200)
        if (response.ok) {
            const movieDetails = await response.json();
            return movieDetails;
        } else {
            console.error(`Error: ${response.status} - ${response.statusText}`);
            return null;
        }
    } catch (error) {
        console.error('An error occurred:', error);
        return null;
    }
}
export default getMovieDetails; */

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

//const TMDB_TOKEN = process.env.VITE_APP_TMDB_TOKEN;
const TOKEN = import.meta.env.VITE_API_KEY

const headers = {
    Authorization: "bearer " + TOKEN,
};

const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
export default fetchDataFromApi;

