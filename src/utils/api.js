import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTdlMTAxMTc5ODczM2M1MzhiYTc0YjgyNGU4NTk3YyIsInN1YiI6IjY2MDkzY2NmZDRmZTA0MDE2MjI4OWJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FTvuHbrHPTiGy141d-dDKRiR54kSMbANcIQNEJ4ovDo";

const headers = {

    Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            header: headers,
            params: params
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};