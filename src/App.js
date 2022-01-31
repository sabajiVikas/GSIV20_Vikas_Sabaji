import React, { useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/app.css";
import { MovieContext } from "./context/MovieContext";
import MovieCard from "./components/MovieCard";

const App = () => {
  const { movies, pageNo, setPageNo } = useContext(MovieContext);

  const prev = () => {
    if (pageNo === 1) return;
    setPageNo((pre) => pre - 1);
  };

  const next = () => {
    if (pageNo === movies?.total_pages) return;
    setPageNo((pre) => pre + 1);
  };

  return (
    <>
      <div className="app">
        {movies?.results.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      <div className="app__btn">
        <div>
          <button onClick={prev} className="btns">
            <i className="bi bi-arrow-left"></i>
          </button>
        </div>
        <div>
          <button onClick={next} className="btns">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
