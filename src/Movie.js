import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "./context/MovieContext";
import "./movie.css";

const Movie = () => {
  const [movie, setMovie] = useState(null);
  console.log(movie);

  const { pageNo } = useContext(MovieContext);

  const { movieId } = useParams();
  // console.log(movieId);

  let tmdbApi = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNo}`;

  const fetchData = () => {
    return fetch(tmdbApi)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData()
      .then((data) => {
        setMovie(
          data.results.find((obj) => parseInt(obj.id) === parseInt(movieId))
        );
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="movie">
      <div className="left">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt="cardImg"
          className="single__img"
        />
      </div>
      <div className="right">
        <div>
          <div className="title">
            {movie?.title}{" "}
            <span className="rating">
              <i style={{ color: "#F7CD2E" }} className="bi bi-star-fill"></i>
              &nbsp;{movie?.vote_average}
            </span>
          </div>
          <div style={{ color: "#758283" }}>{movie?.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
