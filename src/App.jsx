import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import getMovieDetails from "./utils/test";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguratin, getGenres } from "./store/HomeSlice";
import Home from "../src/pages/home/Home";
import PageNotFound from "./pages/404/PageNotFound";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/SearchResult/SearchResult";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  //console.log(url.revenue);
  // Example usage

  // Example movie ID (The Dark Knight)
  useEffect(() => {
    getMovieDetails();
    genreCall();
  }, []);

  getMovieDetails("/configuration")
    .then((movieDetails) => {
      if (movieDetails) {
        const url = {
          backdrop: movieDetails.images.secure_base_url + "original",
          poster: movieDetails.images.secure_base_url + "original",
          profile: movieDetails.images.secure_base_url + "original",
        };
        dispatch(getApiConfiguratin(url));
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  const genreCall = async () => {
    let promise = [];
    let endpints = ["tv", "movie"];
    let allGenres = {};

    endpints.forEach((url) => {
      promise.push(getMovieDetails(`/genre/${url}/list`));
    });
    const data = await Promise.all(promise);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres));
  };
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/:mediaType/:id" element={<Details />}></Route>
        <Route path="/search/:query" element={<SearchResult />}></Route>
        <Route path="/explore/:mediaType" element={<Explore />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
