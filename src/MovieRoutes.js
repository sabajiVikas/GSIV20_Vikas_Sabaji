import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Movie from "./Movie";
import { MovieContext } from "./context/MovieContext";
import Headers from "./components/Headers";

const MovieRoutes = () => {
  const [movies, setMovies] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  // console.log(movies);
  // console.log(pageNo);

  let tmdbApi = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNo}`;

  const fetchData = () => {
    return fetch(tmdbApi)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData()
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, [tmdbApi]);

  return (
    <BrowserRouter>
      <MovieContext.Provider value={{ movies, pageNo, setPageNo }}>
        <Headers />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:movieId" element={<Movie />} />
        </Routes>
      </MovieContext.Provider>
    </BrowserRouter>
  );
};

export default MovieRoutes;
